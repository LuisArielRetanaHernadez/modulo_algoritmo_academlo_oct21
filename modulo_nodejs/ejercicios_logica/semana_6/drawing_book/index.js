/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
function pageCount(n, p) {
  // Write your code here

  const startPage = Math.round(n / 2);

  // si el pagina esta en los primeras paginas retornamos 0
  if (startPage === 1) return 0;

  //  start last page book
  if (p > startPage || p === startPage) {
    const amount = Math.floor(n - p);

    if (!Number.isInteger(n / 2) && n - p === 1) return 0;

    if (amount % 2 === 0) return Math.floor(amount / 2);

    if (amount === 1) return amount;

    return Math.floor((amount - 1) / 2);
  }

  //  start first page book
  if (p < startPage) {
    const amount = p / 2;

    if (!Number.isInteger(amount)) return Math.floor(amount);

    // if (amount % 2 !== 0 && amount !== 1) return (amount - 1) / 2;

    return amount;
  }
  return null;
}

console.log(pageCount(9, 8));
