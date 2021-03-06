import React, { useState } from 'react';
import { rules } from './validation';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { registerUser } from 'api/auth';
import BrandLogo from 'elements/Brand/BrandLogo';
import Button from 'elements/Button/Button';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [status, setStatus] = useState(statusList.idle);
  const MySwal = withReactContent(Swal);

  const onSubmit = async (formData) => {
    let { password, password_confirmation } = formData;

    if (password !== password_confirmation) {
      return setError('password_confirmation', {
        type: 'equality',
        message: 'Konfirmasi password harus sama dengan password',
      });
    }

    setStatus(statusList.process);

    let { data } = await registerUser(formData);

    if (data.error) {
      let fields = Object.keys(data.fields);
      fields.forEach((field) => {
        setError(field, {
          type: 'Server',
          message: data.fields[field]?.properties?.message,
        });
      });

      setStatus(statusList.error);
    } else {
      onSuccess();
      setStatus(statusList.success);
    }
  };

  const onSuccess = () => {
    MySwal.fire({
      text: 'Register Berhasil!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#7c40ff',
    });
    document.getElementById('full_name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password_confirmation').value = '';
  };

  return (
    <div className="login">
      <div className="container_login">
        <BrandLogo color="white" size="large" />
        <div className="form_login mt-50">
          <h3 className="display-2 mb-10">Welcome !</h3>
          <h5 className="display-5 mb-10">
            Please register your account first <br />
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                name="full_name"
                id="full_name"
                ref={register(rules.full_name)}
                className={`form-control ${errors.full_name ? 'invalid' : ''} `}
                placeholder="enter your full name"
              />
              {errors.full_name && (
                <span className="error">*{errors.full_name.message}</span>
              )}
            </div>
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
            <div className="form-group">
              <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                ref={register(rules.password_confirmation)}
                className={`form-control ${
                  errors.password_confirmation ? 'invalid' : ''
                } `}
                placeholder="enter your password confirmation"
              />
              {errors.password_confirmation && (
                <span className="error">
                  *{errors.password_confirmation.message}
                </span>
              )}
            </div>

            <Button className="btn d-block btn-danger" isLarge hasShadow submit>
              {status === statusList.process ? 'Sedang memproses' : 'Mendaftar'}
            </Button>
          </form>
          <div className="text-center d-flex flex-column mt-10">
            <span className="display-5">Sudah punya akun?</span>
            <Link to="/login">
              <span className="display-5 color-primary">masuk sekarang</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
