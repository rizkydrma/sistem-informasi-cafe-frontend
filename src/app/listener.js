import { saveCart } from 'api/cart';
import store from './store';

let currentAuth;
let currentCart;

function listener() {
  let previousAuth = currentAuth;
  let previousCart = currentCart;

  currentAuth = store.getState().auth;
  currentCart = store.getState().cart;

  let { token } = currentAuth;

  if (currentAuth !== previousAuth) {
    localStorage.setItem('auth', JSON.stringify(currentAuth));
  }

  if (currentCart !== previousCart) {
    localStorage.setItem('cart', JSON.stringify(currentCart));

    saveCart(token, currentCart);
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };
