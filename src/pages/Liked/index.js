import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import SkeletonCard from 'skeletons/SkeletonCard';
import Navbar from 'components/Navbar';
import FooterNav from 'components/FooterNav';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from 'features/Products/actions';
import { addItem } from 'features/Cart/actions';
import CardProduct from 'components/CardProduct';

export default function Liked() {
  const titlePage = 'Liked Product';
  let dispatch = useDispatch();
  const history = useHistory();
  let products = useSelector((state) => state.liked);

  const handleDetailProduct = (param) => {
    history.push(`/product/${param}`);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, products.currentPage, products.keyword, products.category]);

  return (
    <>
      <Navbar title={titlePage} />
      <section className="home_page">
        <div className="main_home_page product_list liked-products">
          <div className="container">
            <div className="row">
              {products &&
                products.map((product) => (
                  <CardProduct
                    product={product}
                    onAddProduct={() => dispatch(addItem(product))}
                    key={product._id}
                    onClick={() => handleDetailProduct(product.product._id)}
                  />
                ))}

              {!products &&
                [1, 2, 3, 4].map((number) => (
                  <div className="col-xs-6 col-sm-4 col-md-3" key={number}>
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
