import React from 'react';
import './Stepper.scss';

export default function Stepper({ order, step }) {
  const [stepping, setStepping] = React.useState([]);
  const [currentStep, setCurrentStep] = React.useState(2);

  const statusOrder = (status) => {
    switch (status) {
      case 'preparing':
        return 'order is being prepared soon';
      case 'delivery':
        return 'order is delivery to customer';
      case 'delivered':
        return 'order has been delivered';
      default:
        return status;
    }
  };

  React.useEffect(() => {
    let st = [];
    for (let i = 0; i < step; i++) {
      st.push(i);
    }
    setStepping(st);

    if (order === 'preparing') {
      setCurrentStep(1);
    } else if (order === 'delivery') {
      setCurrentStep(2);
    } else if (order === 'delivered') {
      setCurrentStep(3);
    }
  }, [order, step]);

  return (
    <div className="stepper">
      <h5 className="text-center display-5 mb-20 color-shadow-text">
        {statusOrder(order)}
      </h5>
      <ul className="progressbar">
        {stepping.map((step) => (
          <li
            className={`${step === currentStep ? 'current-step' : ''} ${
              step <= currentStep ? 'active' : ''
            }`}
            key={step}
          >
            <div className="inner-circle"></div>
          </li>
        ))}
      </ul>
      <div className="current-progress">
        <h3 className="display-3">{order}</h3>
      </div>
    </div>
  );
}
