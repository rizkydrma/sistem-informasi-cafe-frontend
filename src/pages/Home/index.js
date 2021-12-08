import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Category from 'components/Category';

import SkeletonCard from 'skeletons/SkeletonCard';
import Navbar from 'components/Navbar';
import FooterNav from 'components/FooterNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

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
import { addItem } from 'features/Cart/actions';
import CardProduct from 'components/CardProduct';

import { socket } from 'app/websocket';

export default function HomePage() {
  const titlePage = 'Search Product';
  let dispatch = useDispatch();
  const history = useHistory();
  const [update, setUpdate] = useState(false);
  let products = useSelector((state) => state.products);

  const handleDetailProduct = (param) => {
    history.push(`/product/${param}`);
  };

  socket.on(`stockProduct`, (data) => {
    const index = products.data.findIndex((val) => val._id === data._id);
    products.data[index] = { ...products.data[index], stock: data.stock };
    setUpdate(!update);
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [
    dispatch,
    products.currentPage,
    products.keyword,
    products.category,
    update,
  ]);

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
                  <CardProduct
                    product={product}
                    onAddProduct={() => dispatch(addItem(product))}
                    key={product._id}
                    onClick={() => handleDetailProduct(product._id)}
                  />
                ))}

              {products.status === 'process' &&
                [1, 2, 3, 4].map((number) => (
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
