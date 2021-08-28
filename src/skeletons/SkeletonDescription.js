import React from 'react';
import './Skeleton.scss';
import SkeletonElement from './SkeletonElement';
import Shimmer from './Shimmer';

export default function SkeletonDescription({ theme }) {
  const themeClasess = theme;
  return (
    <div className={`skeleton-wrapper ${themeClasess}`}>
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />

      <div className="type-product">
        <SkeletonElement type="title" />
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <SkeletonElement type="button" />
            </div>
            <div className="col-xs-6">
              <SkeletonElement type="button" />
            </div>
          </div>
        </div>
      </div>

      <div className="price-product">
        <SkeletonElement type="title" />
        <div className="container">
          <div className="row pt-0">
            <div className="col-xs-7 col-sm-6 d-flex">
              <SkeletonElement type="title" />
            </div>
            <div className="col-xs-5 offset-sm-2 col-sm-4 text-right">
              <SkeletonElement type="button" />
            </div>
          </div>
        </div>
      </div>
      <Shimmer />
    </div>
  );
}
