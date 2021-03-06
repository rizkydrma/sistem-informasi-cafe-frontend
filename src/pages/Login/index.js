import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from 'features/Auth/actions';
import { rules } from './validation';
import { getCart } from 'api/cart';
import { getLiked } from 'api/liked';

import BrandLogo from 'elements/Brand/BrandLogo';
import Button from 'elements/Button/Button';
import { login } from 'api/auth';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { socket } from 'app/websocket';

const statusList = {
  idle: 'idle',
  proccess: 'proccess',
  success: 'success',
  error: 'error',
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [status, setStatus] = useState(statusList.idle);
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const onSubmit = async ({ email, password }) => {
    setStatus(statusList.proccess);

    let { data } = await login(email, password);

    if (data.error) {
      setError('password', {
        type: 'invalidCredential',
        message: data.message,
      });

      setStatus(statusList.error);
    } else {
      let { user, token } = data;
      dispatch(userLogin(user, token));
      getCart();
      getLiked();
      onSuccess(data.message);
    }

    setStatus(statusList.success);
  };

  const onSuccess = (message) => {
    MySwal.fire({
      text: message,
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#7c40ff',
    }).then((result) => {
      if (result.isConfirmed) {
        socket.emit('customerActivity', 1);
      }
    });
  };
  React.useEffect(() => {
    setStatus(statusList.idle);

    return function cleanup() {
      setStatus(statusList.idle);
    };
  }, []);

  return (
    <div className="login">
      <div className="container_login">
        <BrandLogo color="white" size="large" />
        <div className="form_login mt-100">
          <h3 className="display-2 mb-10">Welcome !</h3>
          <h5 className="display-5 mb-10">
            Please enter your name and <br />
            table number before ordering, thank you
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                name="email"
                id="email"
                ref={register(rules.email)}
                className={`form-control ${errors.email ? 'invalid' : ''} `}
                placeholder="enter your email"
              />
              {errors.email && (
                <span className="error">*{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                ref={register(rules.password)}
                className={`form-control ${errors.password ? 'invalid' : ''} `}
                placeholder="enter your password"
              />
              {errors.password && (
                <span className="error">*{errors.password.message}</span>
              )}
            </div>

            <Button
              className="btn d-block btn-danger"
              isLarge
              hasShadow
              submit
              disable={status === 'proccess'}
            >
              Let's Make Order
            </Button>
          </form>
          <div className="text-center d-flex flex-column mt-10">
            <span className="display-5">Belum punya akun?</span>
            <Link to="/register">
              <span className="display-5 color-primary">daftar sekarang</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
