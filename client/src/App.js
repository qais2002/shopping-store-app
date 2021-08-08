import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { UserProvider } from './contexts/UserContext';
import Home from './components/Home';
import Signup from './components/users/Signup';
import Login from './components/users/Login';
import Products from './components/products/Products';
import Product from './components/products/Product';


function App() {

  return (
    <Router>
      <Switch>
        <UserProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:category" component={Products} />
          <Route path="/products/:category/:productID" component={Product} />
          <Route exact path='/users/signup' component={Signup} />
          <Route exact path='/users/login' component={Login} />
        </UserProvider>
      </Switch>
    </Router>
  );
}

export default App;
