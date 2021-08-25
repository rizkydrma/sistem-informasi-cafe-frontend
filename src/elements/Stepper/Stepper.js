import React from 'react';
import './Stepper.scss';

export default function Stepper() {
  return (
    <div className="stepper">
      <ul className="progressbar">
        <li className="active">
          <div className="inner-circle"></div>
        </li>
        <li className="active current-step">
          <div className="inner-circle"></div>
        </li>
        <li>
          <div className="inner-circle"></div>
        </li>
        <li>
          <div className="inner-circle"></div>
        </li>
      </ul>
      <div className="current-progress">
        <h3 className="display-3">Preparing</h3>
      </div>
    </div>
  );
}
