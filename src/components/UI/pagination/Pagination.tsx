import React, { useState } from 'react';
import {
  getFrom,
  getMaxPageNumber,
  getNextPagesArray,
  getPagesArray,
  getPrevPagesArray,
} from '../../../utils/getPagesArray';
import classes from './Pagination.module.css';
import { PaginationType } from '../../../interfaces/types';

export default function Pagination({ pages, page, changePage }: PaginationType) {
  const startPage = page < pages ? page : 1;
  const [pageArray, setPagesArray] = useState(
    getPagesArray(
      getFrom(startPage),
      getMaxPageNumber(pages, startPage === 1 ? 20 : Math.ceil(page / 20) * 20),
    ),
  );

  const resultArr = pageArray.includes(pages)
    ? pageArray.slice(0, pageArray.findIndex((item) => item === pages) + 1)
    : pageArray;
  console.log(resultArr, resultArr);

  return (
    <div className={pages === 0 ? classes.buttonContainer_none : classes.buttonContainer}>
      <button
        type="button"
        disabled={pageArray[0] === 1}
        className={classes.controlButton}
        onClick={() => setPagesArray(getPrevPagesArray(pageArray))}
      >
        Prev
      </button>
      {resultArr.map((p) => (
        <button
          key={p}
          onClick={() => changePage(p)}
          className={
            p === page ? `${classes.pageButton} ${classes.pageCurrent}` : classes.pageButton
          }
          type="button"
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        onClick={() => setPagesArray(getNextPagesArray(pageArray, pages))}
        disabled={pages === pageArray.at(-1)!}
        className={classes.controlButton}
      >
        Next
      </button>
    </div>
  );
}
