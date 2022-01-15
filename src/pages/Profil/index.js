import React from 'react';
import { useDispatch } from 'react-redux';
import Navbar from 'components/Navbar';
import FooterNav from 'components/FooterNav';
import ProfilUser from 'components/ProfilUser';
import { userLogout } from 'features/Auth/actions';
import { logout } from 'api/auth';
import { getOrders } from 'api/order';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import Invoice from 'components/report/Invoice';
import invoice from 'assets/data/invoice';

import { socket } from 'app/websocket';

const styles = StyleSheet.create({
  colorLink: {
    color: 'white',
  },
});

export default function Profil() {
  const titlePage = 'Profil User';
  const dispatch = useDispatch();
  const [orders, setOrders] = React.useState({});
  const [status, setStatus] = React.useState('idle');
  const [showDownload, setShowDownload] = React.useState(false);
  const user = JSON.parse(localStorage.getItem('auth')).user;
  const MySwal = withReactContent(Swal);

  const date = new Date();

  invoice.id = user._id;
  invoice.invoice_no = `${date
    .toLocaleDateString()
    .replaceAll('/', '')}-${user._id.slice(20)}`;
  invoice.trans_date = date.toLocaleDateString();
  invoice.full_name = user.full_name;
  invoice.email = user.email;

  const handleLogout = () => {
    MySwal.fire({
      title: 'Do you want to logout?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7c40ff',
      cancelButtonColor: '#ff5353',
      confirmButtonText: 'Logout',
    }).then(async (result) => {
      if (result.isConfirmed) {
        socket.emit('endCustomer', 1);
        const { data } = await logout();
        if (data.error) {
          MySwal.fire({
            text: data.message,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
        MySwal.fire('Logout!', data.message, 'success');
        dispatch(userLogout());
      }
    });
  };

  const fetchOrders = React.useCallback(async () => {
    setStatus('proccess');

    let { data } = await getOrders();
    if (data.error) {
      setStatus('error');
      return;
    }
    if (data.count < 1) {
      setOrders({ data: [] });
    } else {
      setOrders(data);
      data.data.forEach((item, idx) => {
        if (item.status_payment !== 'done') {
          item.order_items.forEach((order, idx) => {
            invoice.items.push({ id: idx + 1, ...order });
          });
          setShowDownload(true);
        }
      });
    }
    setStatus('success');
  }, []);

  React.useEffect(() => {
    fetchOrders();

    return () => {
      setStatus('idle');
      setShowDownload(false);
    };
  }, [fetchOrders]);

  return (
    <div>
      <Navbar title={titlePage} />
      {status === 'success' && (
        <>
          <ProfilUser order={orders} user={user} onLogout={handleLogout} />
          {showDownload && (
            <div className="profil-user">
              <div className="mini-card mt-10 change">
                <PDFDownloadLink
                  document={<Invoice invoice={invoice} />}
                  fileName={`invoice-${user._id}.pdf`}
                  style={styles.colorLink}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download Invoice'
                  }
                </PDFDownloadLink>
              </div>
            </div>
          )}
        </>
      )}
      <FooterNav />
    </div>
  );
}
