import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import authReducer from 'features/Auth/reducer';
import productReducer from 'features/Products/reducer';
import cartReducer from 'features/Cart/reducer';
import likedReducer from 'features/Liked/reducer';
import orderReducer from 'features/Orders/reducer';
//import redux-thunk middleware
import thunk from 'redux-thunk';

// composer enhancer untuk menghubungkan
// dengan Chrome DevTools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  liked: likedReducer,
  orders: orderReducer,
});

// buat store dan gunakan composerEnhancer + middleware thunk
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk)),
);

export default store;
