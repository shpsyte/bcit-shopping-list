/* eslint-disable no-nested-ternary */
export const orderList = (listShopping, order, column) => {
  if (column === 2) {
    if (order === 'asc') {
      listShopping.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
      );
    } else {
      listShopping.sort((a, b) =>
        b.name > a.name ? 1 : a.name > b.name ? -1 : 0,
      );
    }
  } else if (column === 1) {
    if (order === 'asc') {
      listShopping.sort((a, b) =>
        a.time > b.time ? 1 : b.time > a.time ? -1 : 0,
      );
    } else {
      listShopping.sort((a, b) =>
        b.time > a.time ? 1 : a.time > b.time ? -1 : 0,
      );
    }
  } else if (column === 3) {
    if (order === 'asc') {
      listShopping.sort((a, b) => (a.qtd > b.qtd ? 1 : b.qtd > a.qtd ? -1 : 0));
    } else {
      listShopping.sort((a, b) => (b.qtd > a.qtd ? 1 : a.qtd > b.qtd ? -1 : 0));
    }
  }
};
