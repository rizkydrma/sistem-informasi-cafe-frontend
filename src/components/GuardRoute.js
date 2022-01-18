import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInbox,
  faPaperPlane,
  faCheckDouble,
} from '@fortawesome/free-solid-svg-icons';

import { socket } from 'app/websocket';
const GuardRoute = ({ children, ...rest }) => {
  let { user } = useSelector((state) => state.auth);
  React.useEffect(() => {
    socket.on(`updateOrder-${user !== null ? user._id : ''}`, (data) => {
      switch (data.data) {
        case 'preparing':
          toast.info(`Pesanan Sedang Dibuat Order No: ${data.orderNo}`, {
            icon: <FontAwesomeIcon icon={faInbox} />,
          });
          break;
        case 'delivery':
          toast.warning(`Pesanan Siap Diantar Order No: ${data.orderNo}`, {
            icon: <FontAwesomeIcon icon={faPaperPlane} />,
          });
          break;
        case 'delivered':
          toast.success(`Pesanan Sudah Di antar Order No: ${data.orderNo}`, {
            icon: <FontAwesomeIcon icon={faCheckDouble} />,
          });
          break;
        default:
      }
    });

    return function cleanup() {
      socket.off(`updateOrder-${user !== null ? user._id : ''}`, (data) => {
        console.log('socket update order cust off');
      });
    };
  }, [user]);
  return (
    <>
      <Route {...rest}>{user ? children : <Redirect to="/login" />}</Route>
      <ToastContainer autoClose={7000} theme="dark" />
    </>
  );
};
export default GuardRoute;
