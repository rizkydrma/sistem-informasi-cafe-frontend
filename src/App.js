import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from 'pages/Login';
import Home from 'pages/Home';
import DetailProduct from 'pages/DetailProduct';
import Cart from 'pages/Cart';
import Order from 'pages/Order';
import Invoice from 'pages/Invoice';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/product">
        <DetailProduct />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/order-info">
        <Order />
      </Route>
      <Route path="/invoice">
        <Invoice />
      </Route>
    </Router>
  );
}

export default App;
