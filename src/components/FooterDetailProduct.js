import React from 'react';
import Button from 'elements/Button/Button';

import { sumTax, sumGrandTotal, formatRupiah } from 'utils/utility';

export default function FooterDetailProduct({ subTotal }) {
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
        type="link"
        href="#"
        hasShadow
        className="btn btn-primary d-block"
      >
        Procced To Order
      </Button>
    </>
  );
}
