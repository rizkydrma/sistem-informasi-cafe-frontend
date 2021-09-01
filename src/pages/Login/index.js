import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from 'features/Auth/actions';
import { rules } from './validation';

import BrandLogo from 'elements/Brand/BrandLogo';
import Button from 'elements/Button/Button';
import { login } from 'api/auth';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async ({ username, notable }) => {
    let { data } = await login(username, notable);

    if (data.error) {
      console.log(data.error, data.message);
    } else {
      let { username, notable, token } = data;
      dispatch(userLogin(username, notable, token));
      history.push('/home');
    }
  };

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
                name="username"
                id="username"
                ref={register(rules.username)}
                className={`form-control ${errors.username ? 'invalid' : ''} `}
                placeholder="enter your name"
              />
              {errors.username && (
                <span className="error">*{errors.username.message}</span>
              )}
            </div>
            <div className="form-group">
              <input
                name="notable"
                id="notable"
                ref={register(rules.notable)}
                className={`form-control ${errors.notable ? 'invalid' : ''} `}
                placeholder="enter your name"
              />
              {errors.notable && (
                <span className="error">*{errors.notable.message}</span>
              )}
            </div>

            <Button className="btn d-block btn-danger" isLarge hasShadow submit>
              Let's Make Order
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
