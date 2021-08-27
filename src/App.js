import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';

import HomePage from 'pages/HomePage';
import DetailProductPage from 'pages/DetailProductPage';
import ShoppingCartPage from 'pages/ShoppingCartPage';
import OrderInfoPage from 'pages/OrderInfoPage';
import InvoicePage from 'pages/InvoicePage';
import SkeletonFooter from 'skeletons/SkeletonFooter';
function App() {
  return (
    <Router>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/product">
        <DetailProductPage />
      </Route>
      <Route path="/shopping-cart">
        <ShoppingCartPage />
      </Route>
      <Route path="/order-info">
        <OrderInfoPage />
      </Route>
      <Route path="/invoice">
        <InvoicePage />
      </Route>
      <Route path="/test">
        <SkeletonFooter theme="dark" />
      </Route>
    </Router>
  );
}

export default App;
