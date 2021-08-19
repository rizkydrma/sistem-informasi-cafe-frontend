import React from 'react';
import SkeletonElement from './SkeletonElement';
import './Skeleton.scss';
import Shimmer from './Shimmer';

export default function SkeletonCard({ theme }) {
  const themeClasess = theme || 'light';

  return (
    <div className={`skeleton-wrapper ${themeClasess}`}>
      <div className="skeleton-card">
        <SkeletonElement type="image" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
}
