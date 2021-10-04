import { saveCart } from 'api/cart';
import { saveLiked } from 'api/liked';
import store from './store';

let currentAuth;
let currentCart;
let currentLiked;

function listener() {
  let previousAuth = currentAuth;
  let previousCart = currentCart;
  let previousLiked = currentLiked;

  currentAuth = store.getState().auth;
  currentCart = store.getState().cart;
  currentLiked = store.getState().liked;

  let { token } = currentAuth;

  if (currentAuth !== previousAuth) {
    localStorage.setItem('auth', JSON.stringify(currentAuth));
  }

  if (currentCart !== previousCart) {
    localStorage.setItem('cart', JSON.stringify(currentCart));

    saveCart(token, currentCart);
  }

  if (currentLiked !== previousLiked) {
    localStorage.setItem('liked', JSON.stringify(currentLiked));
    saveLiked(token, currentLiked);
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };
