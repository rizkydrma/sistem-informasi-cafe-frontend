import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from 'components/Navbar';
import FooterNav from 'components/FooterNav';
import ProfilUser from 'components/ProfilUser';
import { userLogout } from 'features/Auth/actions';
import { logout } from 'api/auth';
import { getOrders } from 'api/order';

export default function Profil() {
  const titlePage = 'Profil User';
  const dispatch = useDispatch();
  const history = useHistory();
  const [orders, setOrders] = React.useState([]);
  const [status, setStatus] = React.useState('idle');
  const user = JSON.parse(localStorage.getItem('auth')).user;

  const handleLogout = () => {
    logout();
    dispatch(userLogout());
    history.push('/');
  };

  const fetchOrders = React.useCallback(async () => {
    setStatus('proccess');

    let { data } = await getOrders();
    if (data.error) {
      setStatus('error');
      return;
    }
    setOrders(data);
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
