import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'app/store';

import Login from 'pages/Login';
import Home from 'pages/Home';
import DetailProduct from 'pages/DetailProduct';
import Cart from 'pages/Cart';
import DetailOrder from 'pages/Order/DetailOrder';
import Invoice from 'pages/Invoice';
import Register from 'pages/Register';
import GuardRoute from 'components/GuardRoute';
import GuestOnlyRoute from 'components/GuestOnlyRoute';

import { listen } from 'app/listener';
import { getCart } from 'api/cart';
import ListOrder from 'pages/Order/ListOrder';
import Table from 'elements/Table/Table';

function App() {
  useEffect(() => {
    listen();
    getCart();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <GuestOnlyRoute path="/login">
            <Login />
          </GuestOnlyRoute>
          <GuestOnlyRoute path="/register">
            <Register />
          </GuestOnlyRoute>

          <GuardRoute path="/" exact>
            <Home />
          </GuardRoute>
          <GuardRoute path="/product">
            <DetailProduct />
          </GuardRoute>
          <GuardRoute path="/cart">
            <Cart />
          </GuardRoute>
          <GuardRoute path="/detailorder/:id">
            <DetailOrder />
          </GuardRoute>
          <GuardRoute path="/list-order">
            <ListOrder />
          </GuardRoute>
          <GuardRoute path="/invoice">
            <Invoice />
          </GuardRoute>
          <Route path="/test">
            <Table />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
