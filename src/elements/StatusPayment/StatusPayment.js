import './StatusPayment.scss';

export const StatusPayment = (statusPayment) => {
  switch (statusPayment) {
    case 'waiting_payment':
      return <div className="status-payment text-center waiting">Waiting</div>;

    case 'done':
      return <div className="status-payment text-center done">Payment</div>;

    default:
      return statusPayment;
  }
};
