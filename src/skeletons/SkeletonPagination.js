import React from 'react';
import SkeletonElement from './SkeletonElement';

export default function SkeletonPagination() {
  return (
    <div className="skeleton-wrapper d-flex">
      <SkeletonElement type="paginate-arrow mr-10 dark" />
      <SkeletonElement type="paginate mr-5 dark" />
      <SkeletonElement type="paginate mr-5 dark" />
      <SkeletonElement type="paginate mr-5 dark" />
      <SkeletonElement type="paginate-arrow ml-5 dark" />
    </div>
  );
}
