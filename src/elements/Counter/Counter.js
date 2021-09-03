import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import './Counter.scss';
import Button from 'elements/Button/Button';
export default function Counter({ cartItems, onIncrement, onDecrement, qty }) {
  return (
    <div className="counter">
      <Button onClick={() => onDecrement(cartItems)}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <span>{qty}</span>
      <Button onClick={() => onIncrement(cartItems)}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
}
