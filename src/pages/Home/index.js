import React, { useEffect } from 'react';
import Category from 'components/Category';
import Button from 'elements/Button/Button';
import SkeletonCard from 'skeletons/SkeletonCard';
import Navbar from 'components/Navbar';
import FooterNav from 'components/FooterNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../config';
import { compactNumber } from 'utils/utility';
import Pagination from 'elements/Pagination/Pagination';
import SkeletonPagination from 'skeletons/SkeletonPagination';

import {
  fetchProducts,
  goToNextPage,
  goToPrevPage,
  setCategory,
  setKeyword,
  setPage,
} from 'features/Products/actions';

export default function HomePage() {
  const titlePage = 'Search Product';
  let dispatch = useDispatch();
  let products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, products.currentPage, products.keyword, products.category]);

  return (
    <>
      <Navbar title={titlePage} />
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
              value={products.keyword}
              onChange={(e) => dispatch(setKeyword(e.target.value))}
            />
          </form>
          <Category onChange={(category) => dispatch(setCategory(category))} />
        </div>
        <div className="main_home_page product_list">
          <div className="container">
            <div className="row">
              {products.status === 'success' &&
                products.data.map((product) => (
                  <div className="col-xs-6 col-sm-4 col-md-3" key={product._id}>
                    <div className="card card_product">
                      <figure className="image-wrapper">
                        <img
                          src={`${config.api_host}/upload/${product.image_url}`}
                          alt="kopi pait"
                          className="img-cover"
                        />
                        <div className="tag">
                          <FontAwesomeIcon icon={faStar} />
                          <span>{product.rating}</span>
                        </div>
                      </figure>
                      <div className="meta-wrapper">
                        <h5>{product.name}</h5>
                        {product.variant && <span>{product.variant}</span>}

                        <div className="price">
                          <h5>
                            Rp.<span>{compactNumber(product.price)}</span>
                          </h5>
                          <Button className="add_cart">
                            <FontAwesomeIcon icon={faPlus} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {products.status === 'process' &&
                [1, 2, 3, 4, 5, 6].map((number) => (
                  <div className="col-xs-6 col-sm-4 col-md-3" key={number}>
                    <SkeletonCard theme="dark" />
                  </div>
                ))}
            </div>
          </div>

          <div className="d-flex content-center">
            {products.status === 'success' && (
              <Pagination
                totalItems={products.totalItems}
                page={products.currentPage}
                perPage={products.perPage}
                onChange={(page) => dispatch(setPage(page))}
                onNext={(_) => dispatch(goToNextPage())}
                onPrev={(_) => dispatch(goToPrevPage())}
              />
            )}

            {products.status === 'process' && (
              <SkeletonPagination theme="dark" />
            )}
          </div>
        </div>
      </section>
      <FooterNav />
    </>
  );
}
