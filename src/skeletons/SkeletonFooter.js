import React from 'react';
import SkeletonElement from './SkeletonElement';
import './Skeleton.scss';
import Shimmer from './Shimmer';

export default function SkeletonFooter({ theme }) {
  const themeClasess = theme || 'light';

  return (
    <div className={`skeleton-wrapper ${themeClasess} w-100`}>
      <div className="skeleton-footer skeleton-order-item">
        <div className="d-flex flex-column w-70">
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <div className="d-flex flex-column w-30">
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <SkeletonElement type="button" />
      <Shimmer />
    </div>
  );
}
