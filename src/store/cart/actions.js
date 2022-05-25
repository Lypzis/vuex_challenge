export default {
  addProductToCart(context, payload) {
    const { id } = payload;
    // context has access to the global storage
    const products = context.rootGetters['products/getProducts'];

    const product = products.find((productToFind) => productToFind.id === id);

    context.commit('addProductToCart', product);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
};
