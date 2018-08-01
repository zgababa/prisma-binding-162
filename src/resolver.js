const {forwardTo} = require('prisma-binding');
const {getProductsFromCart} = require('./query/productQuery');

module.exports = {
  resolvers: {
    Query: {
      product: forwardTo('db'),
      products: forwardTo('db'),
      categories: forwardTo('db'),
      category: forwardTo('db'),
      cart: forwardTo('db'),
      carts: forwardTo('db'),
      user: forwardTo('db'),
      users: forwardTo('db'),
    },
    Mutation: {
      createCart: forwardTo('db'),
      updateCart: forwardTo('db'),
      createUser: forwardTo('db'),
      updateUser: forwardTo('db'),
      updateProduct: forwardTo('db'),
    },
    Cart: {
      products: {
        fragment: 'fragment CartId on Cart { id }',
        resolve: async (root, args, ctx, info) => {
          if (!root.products) {
            return getProductsFromCart(root, args, ctx, info);
          }
          return root.products;
        },
      },
    },
  },
};
