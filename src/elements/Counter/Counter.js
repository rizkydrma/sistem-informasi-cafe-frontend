import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import './Counter.scss';
import Button from 'elements/Button/Button';
export default function Counter({
  cartItems,
  onIncrement,
  onDecrement,
  qty,
  type,
}) {
  if (type === 'detail') {
    return (
      <div className="counter">
        <Button className="btn" onClick={() => onDecrement(qty)}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <span>{qty}</span>
        <Button className="btn" onClick={() => onIncrement(qty)}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    );
  }
  return (
    <div className="counter">
      <Button className="btn" onClick={() => onDecrement(cartItems)}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <span>{qty}</span>
      <Button className="btn" onClick={() => onIncrement(cartItems)}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
}
