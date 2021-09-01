import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import authReducer from 'features/Auth/reducer';
import productReducer from 'features/Products/reducer';
//import redux-thunk middleware
import thunk from 'redux-thunk';

// composer enhancer untuk menghubungkan
// dengan Chrome DevTools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  products: productReducer,
});

// buat store dan gunakan composerEnhancer + middleware thunk
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk)),
);

export default store;
