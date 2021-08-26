import React from 'react';
import Navbar from 'components/Navbar';
export default function InvoicePage() {
  const titlePage = 'Invoice';
  return (
    <>
      <Navbar title={titlePage} />
      <div className="invoice-page">
        <div className="invoice-page-item">
          <div className="rectangle-inner"></div>
          <div className="top-style-1">
            <h3 className="display-2">Invoice</h3>
            <h5 className="display-5 color-shadow-text">Order ID123091023</h5>
          </div>

          <div className="card card-style-1 mt-40 mb-10">
            <div className="d-flex content-space-between px-10">
              <div>
                <h4 className="display-4 mb-20">Invoice For</h4>
                <h4 className="display-4 color-primary mb-10">Rizky Darma R</h4>
                <h5 className="display-5 color-shadow-text mb-10">
                  table number
                </h5>
                <h4 className="display-4 color-primary">23</h4>
              </div>
              <div>
                <h4 className="display-4 mb-20">Total Amount</h4>
                <h3 className="display-3 color-primary mb-20">Rp. 111.100</h3>
                <span className="display-5 d-flex">
                  <div className="circle bg-red"></div>
                  <span className="display-5 color-shadow-text">
                    August 25, 2021
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="invoice-page-item">
          <h4 className="display-4 text-center">Order Detail</h4>
          <table className="order-list order-list-invoice">
            <thead>
              <tr>
                <th>
                  <span className="display-5">Order Item</span>
                </th>
                <th>
                  <span className="display-5">qty</span>
                </th>
                <th>
                  <span className="display-5">price</span>
                </th>
                <th>
                  <span className="display-5">total</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="display-4">Coffe</span>
                  <br />
                  <span className="display-5 color-shadow-text">Signature</span>
                </td>
                <td>
                  <span className="display-5">3</span>
                </td>
                <td>
                  <span className="display-5">18K</span>
                </td>
                <td>
                  <span className="display-5 color-primary">54K</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="display-4">Coffe</span>
                  <br />
                  <span className="display-5 color-shadow-text">Signature</span>
                </td>
                <td>
                  <span className="display-5">3</span>
                </td>
                <td>
                  <span className="display-5">18K</span>
                </td>
                <td>
                  <span className="display-5 color-primary">54K</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="display-4">Coffe</span>
                  <br />
                  <span className="display-5 color-shadow-text">Signature</span>
                </td>
                <td>
                  <span className="display-5">3</span>
                </td>
                <td>
                  <span className="display-5">18K</span>
                </td>
                <td>
                  <span className="display-5 color-primary">54K</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="display-4">Coffe</span>
                  <br />
                  <span className="display-5 color-shadow-text">Signature</span>
                </td>
                <td>
                  <span className="display-5">3</span>
                </td>
                <td>
                  <span className="display-5">18K</span>
                </td>
                <td>
                  <span className="display-5 color-primary">54K</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="display-4">Coffe</span>
                  <br />
                  <span className="display-5 color-shadow-text">Signature</span>
                </td>
                <td>
                  <span className="display-5">3</span>
                </td>
                <td>
                  <span className="display-5">18K</span>
                </td>
                <td>
                  <span className="display-5 color-primary">54K</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="display-4">Coffe</span>
                  <br />
                  <span className="display-5 color-shadow-text">Signature</span>
                </td>
                <td>
                  <span className="display-5">3</span>
                </td>
                <td>
                  <span className="display-5">18K</span>
                </td>
                <td>
                  <span className="display-5 color-primary">54K</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="display-4">Coffe</span>
                  <br />
                  <span className="display-5 color-shadow-text">Signature</span>
                </td>
                <td>
                  <span className="display-5">3</span>
                </td>
                <td>
                  <span className="display-5">18K</span>
                </td>
                <td>
                  <span className="display-5 color-primary">54K</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="display-4">Coffe</span>
                  <br />
                  <span className="display-5 color-shadow-text">Signature</span>
                </td>
                <td>
                  <span className="display-5">3</span>
                </td>
                <td>
                  <span className="display-5">18K</span>
                </td>
                <td>
                  <span className="display-5 color-primary">54K</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="footerbar footerbar-detail-product ">
          <div className="sub-total">
            <h5 className="display-5">Subtotal</h5>
            <h3 className="display-4">Rp. 101K</h3>
          </div>
          <div className="sub-total">
            <h5 className="display-5">Tax (10%)</h5>
            <h3 className="display-4">Rp. 10.1K</h3>
          </div>
          <div className="sub-total">
            <h5 className="display-4">Grand Total</h5>
            <h3 className="display-3 color-primary">Rp. 111.1K</h3>
          </div>
        </div>
      </div>
    </>
  );
}
