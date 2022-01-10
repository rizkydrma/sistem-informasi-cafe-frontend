import React, { useEffect, useState } from 'react';
import Navbar from 'components/Navbar';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCoffee,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFill } from '@fortawesome/free-solid-svg-icons';
import { getOneProduct } from 'api/products';
import { useDispatch, useSelector } from 'react-redux';
import { likedItem, unlikedItem } from 'features/Liked/actions';
import Button from 'elements/Button/Button';

import Counter from 'elements/Counter/Counter';
import SkeletonElement from 'skeletons/SkeletonElement';
import SkeletonDescription from 'skeletons/SkeletonDescription';
import { config } from 'config';
import { formatRupiah } from 'utils/utility';
import { addItemFromDetail } from 'features/Cart/actions';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { socket } from 'app/websocket';

const initialState = {
  _id: '',
};

export default function DetailProductPage() {
  const titlePage = 'Detail Product';
  const [fullDescription, setFullDescription] = useState(false);
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const { product_id } = useParams();
  const MySwal = withReactContent(Swal);
  const [active, setActive] = useState(false);
  const likedItems = useSelector((state) => state.liked);

  const [data, setData] = useState({});

  const handleFullDescription = () => {
    setFullDescription(!fullDescription);
  };

  const readMoreText = (words, start, end) => {
    return words.split(' ').slice(start, end).join(' ') + `...  `;
  };

  const onIncrement = (qty) => {
    setData({ ...data, qty: parseInt(qty) + parseInt(1) });
  };
  const onDecrement = (qty) => {
    if (qty > 0) {
      setData({ ...data, qty: parseInt(qty) - parseInt(1) });
    }
  };

  const fetchProduct = React.useCallback(async () => {
    let { data } = await getOneProduct(product_id);

    if (data.error) return;
    setProduct(data);
    setData({
      ...data,
      qty: 1,
      type: data.type !== undefined ? data.type : null,
    });

    return;
  }, [product_id]);

  const isLiked = React.useCallback(
    (likedItems) => {
      const liked = likedItems.filter(
        (item) => item.product._id === product_id,
      );
      if (liked.length > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    },
    [product_id],
  );

  const onSuccess = () => {
    MySwal.fire({
      text: 'Berhasil ditambahkan ke keranjang',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#7c40ff',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(addItemFromDetail(data));
      }
    });
  };
  socket.on(`stockProduct-${product_id}`, (data) => {
    setProduct({ ...product, stock: data.stock });
  });
  useEffect(() => {
    fetchProduct();
    isLiked(likedItems);
  }, [fetchProduct, product_id, isLiked, likedItems]);

  return (
    <>
      <Navbar title={titlePage} />
      <section className="main_detail_page">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-5 offset-sm-1">
              {product && (
                <div className="image-product">
                  <figure
                    className={`image-wrapper pointer ${
                      product.stock !== 'in stock' ? 'img-out-of-stock' : 'ok'
                    } `}
                  >
                    {product.image_url !== undefined && (
                      <img
                        src={`${config.api_host}/upload/${product.image_url}`}
                        alt="kopi signature"
                        className="img-cover"
                      />
                    )}
                  </figure>
                  <div className="meta-wrapper">
                    <h5>{product.name}</h5>
                    {product.variant && <span>{product.variant}</span>}
                    <div className="bottom-meta">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <span>{product.rating}</span>
                      </div>
                      <div className="category_product">
                        <FontAwesomeIcon icon={faCoffee} />
                        {product.category && (
                          <span>{product.category.name}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {!product && (
                <div className="skeleton-wrapper dark">
                  <SkeletonElement type="image w-100 h-30" />
                </div>
              )}
            </div>

            <div className="col-xs-12 col-sm-5">
              {product && (
                <>
                  <div className="description-product">
                    <h4 className="display-4">Description</h4>
                    <h6 className="display-5 description">
                      {!fullDescription ? (
                        <>
                          {product.description &&
                            readMoreText(product.description, 0, 10)}
                          <button
                            className="read-more"
                            onClick={() => handleFullDescription()}
                          >
                            read more
                          </button>
                        </>
                      ) : (
                        <>
                          {product.description && product.description + '  '}
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
                  {product.type && (
                    <div className="type-product">
                      <h4 className="display-4 mt-10">Variant</h4>
                      <div className="container">
                        <div className="row">
                          <div className="col-xs-6">
                            <div
                              className={`card card-type ${
                                data.variant === 'Ice' ? 'active' : ''
                              }`}
                              onClick={() =>
                                setData({ ...data, variant: 'Ice' })
                              }
                            >
                              <span className="display-5">Ice</span>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div
                              className={`card card-type ${
                                data.variant === 'Hot' ? 'active' : ''
                              }`}
                              onClick={() =>
                                setData({ ...data, variant: 'Hot' })
                              }
                            >
                              <span className="display-5">Hot</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="price-product">
                    <h4 className="display-4">Price</h4>
                    <div className="container">
                      <div className="row pt-0">
                        <div className="col-xs-7 col-sm-6 d-flex">
                          <h3 className="display-3">
                            {formatRupiah(product.price)}
                          </h3>
                        </div>
                        <div className="col-xs-5 offset-sm-2 col-sm-4 text-right">
                          <Counter
                            type="detail"
                            qty={data.qty}
                            onIncrement={() => onIncrement(data.qty)}
                            onDecrement={() => onDecrement(data.qty)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="footerbar-product footerbar-product-desk">
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-4">
                          {active ? (
                            <Button
                              className="nav-button btn"
                              onClick={() => dispatch(unlikedItem(product))}
                            >
                              <FontAwesomeIcon
                                icon={faHeartFill}
                                className="liked"
                              />
                            </Button>
                          ) : (
                            <Button
                              className="nav-button btn"
                              onClick={() => dispatch(likedItem(product))}
                            >
                              <FontAwesomeIcon icon={faHeart} />
                            </Button>
                          )}
                        </div>
                        <div className="col-xs-8">
                          <Button
                            className="add_cart"
                            onClick={() => {
                              onSuccess();
                            }}
                            disabled={
                              product.stock !== 'in stock' ? true : undefined
                            }
                          >
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {!product && <SkeletonDescription theme="dark" />}
            </div>
            <div className="footerbar footerbar-product">
              {product && (
                <div className="container">
                  <div className="row">
                    <div className="col-xs-4">
                      {active ? (
                        <Button
                          className="nav-button btn"
                          onClick={() => dispatch(unlikedItem(product))}
                        >
                          <FontAwesomeIcon
                            icon={faHeartFill}
                            className="liked"
                          />
                        </Button>
                      ) : (
                        <Button
                          className="nav-button btn"
                          onClick={() => dispatch(likedItem(product))}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </Button>
                      )}
                    </div>
                    <div className="col-xs-8">
                      <Button
                        className="add_cart"
                        onClick={() => {
                          onSuccess();
                        }}
                        disabled={
                          product.stock !== 'in stock' ? true : undefined
                        }
                      >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              {!product && (
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
