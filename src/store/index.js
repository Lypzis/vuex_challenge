import { createStore } from 'vuex';

import cartModule from './cart/index';
import productsModule from './products/index';
import authModule from './auth/index';

const store = createStore({
  modules: {
    cart: cartModule,
    products: productsModule,
    auth: authModule,
  },
});

export default store;
