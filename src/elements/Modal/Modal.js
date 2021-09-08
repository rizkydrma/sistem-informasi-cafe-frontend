import React, { useEffect, useCallback, useState } from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';
import { useForm } from 'react-hook-form';
import Button from 'elements/Button/Button';
import { useHistory } from 'react-router-dom';

import { getTable } from 'api/table';
import './Modal.scss';

export default function Modal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const [tables, setTables] = useState();

  const classes = [props.className];

  if (props.show) classes.push('enter-done');
  if (!props.show) classes.shift('enter-done');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  const onSubmit = ({ notable }) => {
    localStorage.setItem('notable', notable);
    history.pushState(props.redirect);
  };

  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        props.onClose();
      }
    },
    [props],
  );

  useEffect(() => {
    async function fetchData() {
      let data = await getTable();
      setTables(data.data);
    }
    fetchData();
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown, setTables]);

  if (props.type === 'question') {
    return (
      <div
        className={`modal ${classes.join(' ')}`}
        onClick={() => props.onClose()}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Masukan no meja</h4>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <select
                  name="notable"
                  ref={register('notable', {
                    required: true,
                    maxLength: 3,
                  })}
                  className={`form-control ${errors.notable ? 'invalid' : ''}`}
                >
                  {tables &&
                    tables.map((table) => (
                      <option value={table.notable} key={table._id}>
                        {table.notable}
                      </option>
                    ))}
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <Button
              onClick={() => onClick()}
              className="btn btn-primary w-50"
              isSmall
            >
              OK
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal enter-done" onClick={() => props.onClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">
            {props.status === 'success' ? 'Berhasil' : 'Gagal'}
          </h4>
        </div>
        <div className="modal-body">
          {props.status && (
            <div
              className={`modal-icon ${
                props.status === 'success' ? 'success' : 'danger'
              }`}
            >
              <FontAwesomeIcon
                icon={
                  props.status === 'success' ? faCheckCircle : faTimesCircle
                }
              />
            </div>
          )}
          <h5 className="display-5 text-center mt-5">logged in successfully</h5>
        </div>
        <div className="modal-footer">
          <Button
            onClick={() => onClick()}
            className="btn btn-primary w-50"
            isSmall
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  image: propTypes.string,
  status: propTypes.string,
  onClick: propTypes.func,
  redirect: propTypes.string,
};
