export const dummyCategory1 = {
  title: 'category1',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategory2 = {
  title: 'category2',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategory3 = {
  title: 'category3',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategory4 = {
  title: 'category4',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategory5 = {
  title: 'category5',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategory6 = {
  title: 'category6',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategory7 = {
  title: 'category7',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

export const dummyCategories = [
  dummyCategory1,
  dummyCategory2,
  dummyCategory3,
  dummyCategory4,
  dummyCategory5,
  dummyCategory6,
  dummyCategory6,
];

export const dummyProductWithDiscount = {
  title: 'Product',
  imageUrl: 'https://reactjs.org/logo-og.png',
  price: 100,
  discount: 0.2,
  description: 'Nice Product , bla bla bla',
};

export const dummyProductWithoutDiscount = {
  title: 'Product',
  imageUrl: 'https://reactjs.org/logo-og.png',
  price: 100,
  description: 'Nice Product , bla bla bla',
};

export const dummyCartItem = {
  product: dummyProductWithDiscount,
};

export const dummyOrder = {
  cartItems: [dummyCartItem],
  cost: 150,
  status: 'PLACED',
};
