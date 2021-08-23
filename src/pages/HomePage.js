import React, { useEffect, useState } from 'react';
import Category from 'components/Category';
import Button from 'elements/Button/Button';
import SkeletonCard from 'skeletons/SkeletonCard';
import Navbar from 'components/Navbar';
import FooterNav from 'components/FooterNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

import ImageCoffee from 'assets/images/coffe.jpg';

export default function HomePage() {
  const [products, setProducts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProducts(true);
    }, 5000);
  }, [products]);

  return (
    <>
      <Navbar />
      <section className="home_page">
        <div className="main_home_page top_bar">
          <h1 className="slogan display-2 mb-10">Find the best for you</h1>
          <form action="" className="input mb-10">
            <FontAwesomeIcon className="input-icons" icon={faSearch} />
            <input
              type="text"
              name="search"
              id="search"
              className="form-control search-input"
              placeholder="find what do you want..."
            />
          </form>
        </div>
        <Category />
        <div className="main_home_page product_list">
          <div className="container">
            <div className="row">
              {products && (
                <div className="col-xs-6 col-sm-4 col-md-3">
                  <div className="card card_product">
                    <figure className="image-wrapper">
                      <img
                        src={ImageCoffee}
                        alt="kopi pait"
                        className="img-cover"
                      />
                      <div className="tag">
                        <FontAwesomeIcon icon={faStar} />
                        <span>4.7</span>
                      </div>
                    </figure>
                    <div className="meta-wrapper">
                      <h5>Cappucino</h5>
                      <span>Signature</span>

                      <div className="price">
                        <h5>
                          Rp.<span>18K</span>
                        </h5>
                        <Button className="add_cart">
                          <FontAwesomeIcon icon={faPlus} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!products &&
                [1, 2, 3, 4, 5, 6].map((data, index) => (
                  <div className="col-xs-6 col-sm-4 col-md-3" key={index}>
                    <SkeletonCard theme="dark" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <FooterNav />
    </>
  );
}
