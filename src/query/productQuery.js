async function getProductsFromCart(cart, args, ctx) {
  await ctx.db.mutation.updateCart(
    {where: {id: 'cjkb4jn9103dp0848yw13d2o2'}},
    {
      data: {
        duration: 6,
      },
    },
  );
}

module.exports = {
  getProductsFromCart,
};
