import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from 'components/Navbar';
import FooterNav from 'components/FooterNav';
import { useDispatch } from 'react-redux';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { updateOneUser } from 'api/user';
import { logout } from 'api/auth';
import { socket } from 'app/websocket';
import { userLogout } from 'features/Auth/actions';

const titlePage = 'Change Profil';

function ChangeProfil() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('auth')).user;
  const MySwal = withReactContent(Swal);
  const [state, setState] = useState({
    _id: user._id,
    full_name: user.full_name,
    email: user.email,
    password: '',
    confirmPassword: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    const { id, email, confirmPassword, password, ...restData } = data;
    const keys = Object.keys(restData);
    const values = Object.values(restData);
    keys.forEach((item, idx) => {
      formData.append(item, values[idx]);
    });

    if (user.email !== email) {
      formData.append('email', email);
    }

    if (password !== confirmPassword) {
      setError('password', {
        message: 'Password Tidak Cocok!',
      });
      return;
    }

    if (password.length > 0) {
      formData.append('password', password);
    }

    const userData = await updateOneUser(id, formData);

    if (userData.data.error > 0) {
      setError('full_name', {
        message: userData.data.message,
      });
    } else {
      onSubmitSuccess('Berhasil Mengubah Data!');
    }
  };

  const onSubmitSuccess = (message) => {
    MySwal.fire({
      text: message,
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#4caf50',
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

  return (
    <div>
      <Navbar title={titlePage} />
      <section className="profil-user mt-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="id" value={state._id} ref={register()} />
          <div className="card mt-10">
            <div className="input">
              {errors.full_name && (
                <span className="error">*{errors.full_name.message}</span>
              )}
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                ref={register()}
                value={state.full_name}
                name="full_name"
                className="input-field"
                onChange={(e) =>
                  setState({ ...state, full_name: e.target.value })
                }
              />
            </div>
            <div className="input">
              {errors.email && (
                <span className="error">*{errors.email.message}</span>
              )}
              <label htmlFor="email">Email</label>
              <input
                type="text"
                ref={register()}
                value={state.email}
                name="email"
                className="input-field"
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
            </div>
            <div className="input">
              {errors.password && (
                <span className="error">*{errors.password.message}</span>
              )}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                ref={register()}
                name="password"
                className="input-field"
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              />
            </div>
            <div className="input">
              {errors.password && (
                <span className="error">*{errors.password.message}</span>
              )}
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                ref={register()}
                name="confirmPassword"
                className="input-field"
                onChange={(e) =>
                  setState({ ...state, confirmPassword: e.target.value })
                }
              />
            </div>
          </div>
          <button
            type="submit"
            style={{
              textAlign: 'center',
              backgroundColor: 'transparent',
              border: 0,
              width: '100%',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 400,
            }}
          >
            <div className="mini-card mt-10 change">
              Save Change <FontAwesomeIcon icon={faSave} />
            </div>
          </button>
        </form>
      </section>
      <FooterNav />
    </div>
  );
}

export default ChangeProfil;
