import React from 'react';
import SkeletonElement from './SkeletonElement';
import './Skeleton.scss';
import Shimmer from './Shimmer';

export default function SkeletonOrderItem({ theme }) {
  const themeClasess = theme || 'light';

  return (
    <div className={`skeleton-wrapper  ${themeClasess}`}>
      <div className="skeleton-order-item">
        <SkeletonElement type="avatar" />
        <div className="d-flex flex-column w-60">
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <div className="d-flex flex-column w-10">
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
}
