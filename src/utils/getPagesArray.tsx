export function getPagesArray(start: number, end: number) {
  const step = 1;
  return Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);
}

export function getMaxPageNumber(totalPages: number, perPageNumber: number) {
  const maxPageNumber = perPageNumber > totalPages ? totalPages : perPageNumber;
  return maxPageNumber;
}

export function getNextPagesArray(currentPages: number[], total: number) {
  let arr: [] | number[];
  if (total === 0) {
    arr = [];
  } else {
    arr = currentPages.map((item) => item + 20);
    if (arr.includes(total)) {
      return arr.slice(
        0,
        arr.findIndex((item) => item === total),
      );
    }
  }
  return arr;
}

export function getPrevPagesArray(currentPages: number[]) {
  return currentPages.map((item) => item - 20);
}

export function getFrom(page: number) {
  let result;
  if (page <= 20) {
    result = 1;
  } else if (page % 20 !== 0) {
    result = Math.trunc(page / 20) * 20 + 1;
  } else {
    result = (Math.trunc(page / 20) - 1) * 20 + 1;
  }
  return result;
}
