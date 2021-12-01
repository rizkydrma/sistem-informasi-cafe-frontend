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

import { socket } from 'app/websocket';

export default function Profil() {
  const titlePage = 'Profil User';
  const dispatch = useDispatch();
  const [orders, setOrders] = React.useState({});
  const [status, setStatus] = React.useState('idle');
  const user = JSON.parse(localStorage.getItem('auth')).user;
  const MySwal = withReactContent(Swal);

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
    console.log(data);
    if (data.error) {
      setStatus('error');
      return;
    }
    if (data.count < 1) {
      setOrders({ data: [] });
    } else {
      setOrders(data);
    }
    setStatus('success');
  }, []);

  React.useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div>
      <Navbar title={titlePage} />
      {status === 'success' && (
        <ProfilUser order={orders} user={user} onLogout={handleLogout} />
      )}
      <FooterNav />
    </div>
  );
}
