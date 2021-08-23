import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';

import HomePage from 'pages/HomePage';
import DetailProductPage from 'pages/DetailProductPage';
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
    </Router>
  );
}

export default App;
