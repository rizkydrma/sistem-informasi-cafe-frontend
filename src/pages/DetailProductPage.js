import React, { useEffect, useState } from 'react';
import Navbar from 'components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCoffee,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import ImageCoffee from 'assets/images/coffe.jpg';
import Counter from 'elements/Counter/Counter';
import SkeletonElement from 'skeletons/SkeletonElement';
import SkeletonDescription from 'skeletons/SkeletonDescription';

export default function DetailProductPage() {
  const [fullDescription, setFullDescription] = useState(false);
  const [products, setProducts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProducts(true);
    }, 6000);
  }, [products]);
  const titlePage = 'Detail Product';
  const handleFullDescription = () => {
    setFullDescription(!fullDescription);
  };
  const string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde temporibus ad impedit, laboriosam odit illum accusantium autem facilis vero ut ex obcaecati repudiandae omnis, dolor dolores velit at? Dolor.';
  const readMoreText = (words, start, end) => {
    return words.split(' ').slice(start, end).join(' ') + `...  `;
  };
  return (
    <>
      <Navbar title={titlePage} />
      <section className="main_detail_page">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-5 offset-sm-1">
              {products && (
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
              )}

              {!products && (
                <div className="skeleton-wrapper dark">
                  <SkeletonElement type="image w-100 h-30" />
                </div>
              )}
            </div>

            <div className="col-xs-12 col-sm-5">
              {products && (
                <>
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
                          <div className="card card-type active">
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
                        <div className="col-xs-7 col-sm-6 d-flex">
                          <h3 className="display-3">Rp.</h3>
                          <span className="display-3">18K</span>
                        </div>
                        <div className="col-xs-5 offset-sm-2 col-sm-4 text-right">
                          <Counter number="1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footerbar-product footerbar-product-desk">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-4">
                          <span className="nav-button">
                            <FontAwesomeIcon icon={faHeart} />
                          </span>
                        </div>
                        <div className="col-xs-8">
                          <div className="add_cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Add to Cart
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {!products && <SkeletonDescription theme="dark" />}
            </div>
            <div className="footerbar footerbar-product">
              {products && (
                <div className="container">
                  <div className="row">
                    <div className="col-xs-4">
                      <span className="nav-button">
                        <FontAwesomeIcon icon={faHeart} />
                      </span>
                    </div>
                    <div className="col-xs-8">
                      <div className="add_cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        Add to Cart
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {!products && (
                <div className="skeleton-wrapper dark w-100">
                  <SkeletonElement type="button" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
