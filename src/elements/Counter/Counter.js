import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import './Counter.scss';
import Button from 'elements/Button/Button';
export default function Counter(props) {
  return (
    <div className="counter">
      <Button>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <span>{props.number}</span>
      <Button>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
}
