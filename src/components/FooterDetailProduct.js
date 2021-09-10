import React, { useState } from 'react';
import Button from 'elements/Button/Button';

import { sumTax, sumGrandTotal, formatRupiah } from 'utils/utility';
import Modal from 'elements/Modal/Modal';

export default function FooterDetailProduct({ subTotal, type }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="sub-total">
        <h5 className="display-5">Subtotal</h5>
        <h3 className="display-5 color-primary">{formatRupiah(subTotal)}</h3>
      </div>
      <div className="sub-total">
        <h5 className="display-5">Tax (10%)</h5>
        <h3 className="display-5 color-primary">
          {formatRupiah(sumTax(subTotal))}
        </h3>
      </div>
      <div className="sub-total">
        <h5 className="display-5">Grand Total</h5>
        <h3 className="display-5 color-primary">
          {formatRupiah(sumGrandTotal(subTotal))}
        </h3>
      </div>
      {type === 'cart' && subTotal !== 0 && (
        <>
          <Button
            isLarge
            hasShadow
            className="btn btn-primary d-block"
            onClick={() => setShowModal(!showModal)}
          >
            Procced To Order
          </Button>
          <Modal
            show={showModal}
            type="question"
            onClose={() => setShowModal(false)}
            redirect="/list-order"
          />
        </>
      )}
    </>
  );
}
