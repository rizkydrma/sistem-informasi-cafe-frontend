import React from 'react';
import Button from 'elements/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { config } from 'config';
import { formatRupiah } from 'utils/utility';

export default function CardProduct({ product, onAddProduct }) {
  return (
    <div className="col-xs-6 col-sm-4 col-md-3">
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
              <span>{formatRupiah(product.price)}</span>
            </h5>
            <Button className="add_cart" onClick={(_) => onAddProduct()}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
