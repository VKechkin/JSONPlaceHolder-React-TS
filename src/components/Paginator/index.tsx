import React, { useMemo } from "react";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import Pagination from "react-bootstrap/Pagination";

import { useAppDispatch } from "@hooks";

import "./style.scss";

interface IProps {
  children?: React.ReactNode;
  page?: number;
  limit?: number;
  total: number | null;
  action: ActionCreatorWithPayload<number, string>;
}

const Paginator: React.FC<IProps> = ({ page, limit, total, action }) => {
  const dispatch = useAppDispatch();

  const totalPages = Math.ceil((total || 0) / (limit ? limit : 1));

  const handleClickPagination = (newPage: number) => {
    if (total) {
      dispatch(action(newPage));
    }
  };

  const createPaginationNumber = (i: number) => {
    return (
      <Pagination.Item
        key={`pagination-key-${i}`}
        active={i === page}
        activeLabel={"."}
        onClick={() => handleClickPagination(i)}
      >
        {i}
      </Pagination.Item>
    );
  };

  const paginationItems = useMemo(() => {
    const items: any = [];

    if (totalPages > 10 && page != null) {
      const midpoint = page + 2;

      if (page > 1) {
        items.push(createPaginationNumber(1));
        if (page > 2 && totalPages > 9) {
          items.push(<Pagination.Ellipsis key="pagination-ellipsis-1" />);
        }
      }
      for (let i = page; i <= midpoint; i++) {
        if (i <= totalPages) {
          items.push(createPaginationNumber(i));
        }
      }
      if (midpoint < totalPages) {
        items.push(<Pagination.Ellipsis key="pagination-ellipsis-2" />);
      }
      if (midpoint < totalPages) {
        items.push(createPaginationNumber(totalPages));
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        items.push(createPaginationNumber(i));
      }
    }

    return items;
  }, [page, limit, total]);

  return (
    <div className="container-pagination">
      {totalPages != null && (
        <Pagination className="paginationInfo">
          {page != null && page > 1 && (
            <Pagination.Prev
              onClick={() => handleClickPagination(page - 1)}
              disabled={page === 1}
            />
          )}
          {paginationItems}
          {page != null && page < 10 && (
            <Pagination.Next
              onClick={() => handleClickPagination(page + 1)}
              disabled={page === totalPages}
            />
          )}
        </Pagination>
      )}
    </div>
  );
};

export { Paginator };
