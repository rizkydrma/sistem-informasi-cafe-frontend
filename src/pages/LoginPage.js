import BrandLogo from 'elements/Brand/BrandLogo';
import Button from 'elements/Button/Button';
import React from 'react';

export default function LoginPage() {
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
          <form action="">
            <input
              type="text"
              name="no"
              id="no"
              className="form-control mb-10"
              placeholder="enter table number"
            />
            <input
              type="text"
              name="name"
              id="name"
              className="form-control mb-10"
              placeholder="enter your name"
            />
            <Button
              href="#"
              type="link"
              className="d-block btn-danger"
              isLarge
              hasShadow
            >
              Let's Make Order
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
