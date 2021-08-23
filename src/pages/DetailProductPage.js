import React, { useState } from 'react';
import Navbar from 'components/Navbar';
import FooterNav from 'components/FooterNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCoffee } from '@fortawesome/free-solid-svg-icons';

import ImageCoffee from 'assets/images/coffe.jpg';
import Button from 'elements/Button/Button';

export default function DetailProductPage() {
  const [fullDescription, setFullDescription] = useState(false);
  const handleFullDescription = () => {
    setFullDescription(!fullDescription);
  };
  const string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde temporibus ad impedit, laboriosam odit illum accusantium autem facilis vero ut ex obcaecati repudiandae omnis, dolor dolores velit at? Dolor.';
  const readMoreText = (words, start, end) => {
    return words.split(' ').slice(start, end).join(' ') + '...' + '  ';
  };
  return (
    <>
      <Navbar />
      <section className="main_detail_page">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-5">
              <div className="image-product">
                <figure className="image-wrapper">
                  <img
                    src={ImageCoffee}
                    alt="kopi signature"
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <h5>Cappucinno</h5>
                  <span>Signature</span>
                  <div className="bottom-meta">
                    <div className="rating">
                      <FontAwesomeIcon icon={faStar} />
                      <span>4.7</span>
                    </div>
                    <div className="category_product">
                      <FontAwesomeIcon icon={faCoffee} />
                      <span>coffee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-7">
              <div className="description-product">
                <h4 className="display-4">Description</h4>
                <h6 className="display-5 description">
                  {!fullDescription ? (
                    <>
                      {readMoreText(string, 0, 10)}
                      <button
                        className="read-more"
                        onClick={() => handleFullDescription()}
                      >
                        read more
                      </button>
                    </>
                  ) : (
                    <>
                      {string + '  '}
                      <button
                        className="show-less"
                        onClick={() => handleFullDescription()}
                      >
                        show less
                      </button>
                    </>
                  )}
                </h6>
              </div>

              <div className="type-product">
                <h4 className="display-4 mt-10">Type</h4>
                <div className="container">
                  <div className="row">
                    <div className="col-xs-6">
                      <div className="card card-type">
                        <span className="display-5">Hot</span>
                      </div>
                    </div>
                    <div className="col-xs-6">
                      <div className="card card-type">
                        <span className="display-5">Ice</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="price-product">
                <h4 className="display-4">Price</h4>
                <div className="container">
                  <div className="row pt-0">
                    <div className="col-xs-7 col-sm-4 d-flex">
                      <h3 className="display-2">Rp.</h3>
                      <span className="display-2">18K</span>
                    </div>
                    <div className="col-xs-5 col-sm-4">
                      <Button isLarge className="add_cart d-block">
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterNav />
    </>
  );
}
