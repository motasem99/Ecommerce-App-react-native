export const dummyCategory = {
  title: 'category',
  imageUrl: 'https://reactjs.org/logo-og.png',
};

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
