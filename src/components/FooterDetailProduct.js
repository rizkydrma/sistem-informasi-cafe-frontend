import React, { useState } from 'react';
import Button from 'elements/Button/Button';

import { sumTax, sumGrandTotal, formatRupiah } from 'utils/utility';
import Modal from 'elements/Modal/Modal';

export default function FooterDetailProduct({ subTotal }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="sub-total">
        <h5 className="display-5">Subtotal</h5>
        <h3 className="display-4">{formatRupiah(subTotal)}</h3>
      </div>
      <div className="sub-total">
        <h5 className="display-5">Tax (10%)</h5>
        <h3 className="display-4">{formatRupiah(sumTax(subTotal))}</h3>
      </div>
      <div className="sub-total">
        <h5 className="display-5">Grand Total</h5>
        <h3 className="display-4">
          {formatRupiah(sumGrandTotal(subTotal, sumTax(subTotal)))}
        </h3>
      </div>
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
      />
    </>
  );
}
