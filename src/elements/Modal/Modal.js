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
import { useDispatch } from 'react-redux';

import { getTable } from 'api/table';
import './Modal.scss';
import { createOrder } from 'api/order';
import { clearItems } from 'features/Cart/actions';

export default function Modal(props) {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const [tables, setTables] = useState();
  let dispatch = useDispatch();

  const classes = [props.className];

  if (props.show) classes.push('enter-done');
  if (!props.show) classes.shift('enter-done');

  // const onClick = () => {
  //   if (props.onClick) props.onClick();
  // };

  const onSubmit = async (payload) => {
    localStorage.setItem('notable', payload.notable);

    let { data } = await createOrder(payload.notable);

    if (data?.error) return;

    dispatch(clearItems());
    history.push(props.redirect);
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
    // return function cleanup() {
    //   document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    // };
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body">
              <div className="form-group">
                <select
                  ref={register}
                  name="notable"
                  className={`form-control ${errors.notable ? 'invalid' : ''}`}
                >
                  {tables &&
                    tables.map((table) => (
                      <option
                        value={table.notable}
                        key={table._id}
                        onClick={() => {
                          setValue('notable', table.notable);
                        }}
                      >
                        {table.notable}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <Button className="btn btn-primary w-50" isSmall submit>
                OK
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`modal ${classes.join(' ')}`}
      onClick={() => props.onClose()}
    >
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
            onClick={() => history.push('/')}
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
