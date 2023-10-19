import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
