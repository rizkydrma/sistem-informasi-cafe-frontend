import React, { useEffect, useState } from 'react';
import Navbar from 'components/Navbar';

import ImageCoffee from 'assets/images/coffe.jpg';
import Stepper from 'elements/Stepper/Stepper';
import SkeletonDescription from 'skeletons/SkeletonDescription';
import SkeletonFooter from 'skeletons/SkeletonFooter';
import SkeletonElement from 'skeletons/SkeletonElement';

export default function OrderInfoPage() {
  const titlePage = 'Order Info';
  const [products, setProducts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProducts(true);
    }, 5000);
  }, [products]);

  return (
    <>
      <Navbar title={titlePage} />
      <section className="info-order">
        {products && (
          <>
            <div className="info-order-item">
              <div className="ordering">
                <h5 className="display-5 mb-10 color-shadow-text">
                  Nama Pemesan
                </h5>
                <h3 className="display-3 mb-20">Rizky Darma</h3>
                <h5 className="display-5 mb-10 color-shadow-text">No Table</h5>
                <h3 className="display-3 mb-20">23</h3>
                <h5 className="display-5 mb-20 color-shadow-text">
                  order is being prepared soon
                </h5>
              </div>
              <Stepper />

              <div className="footerbar-info-order footbar-info-order-desk mt-20">
                <h3 className="display-5">Grand Total</h3>
                <h2 className="display-4 color-primary">Rp. 111.1K</h2>
              </div>
            </div>
            <div className="info-order-item">
              <table className="order-list">
                <thead>
                  <tr>
                    <th colSpan="2">
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
                      <img src={ImageCoffee} alt="kopi" className="img-cover" />
                    </td>
                    <td>
                      <span className="display-4">Coffe</span>
                      <br />
                      <span className="display-5 color-shadow-text">
                        Signature
                      </span>
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
          </>
        )}

        {!products && <SkeletonDescription theme="dark" />}
      </section>
      <div className="footerbar footerbar-info-order">
        {products && (
          <>
            <h3 className="display-4">Grand Total</h3>
            <h2 className="display-3 color-primary">Rp. 111.1K</h2>
          </>
        )}

        {!products && (
          <div className="skeleton-wrapper dark d-flex w-100">
            <div className="w-30">
              <SkeletonElement type="button" />
            </div>
            <div className="w-70">
              <SkeletonElement type="button" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
