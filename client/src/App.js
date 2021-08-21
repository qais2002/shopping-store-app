import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import { UserProvider } from './contexts/UserContext';
import Home from './components/Home';
import Signup from './components/users/Signup';
import Login from './components/users/Login';
import Products from './components/products/Products';
import Product from './components/products/Product';
import NavBar from './components/Navbar/Navbar';


function App() {

  return (
    <Router>
      <NavBar />
      <Switch>
        <UserProvider>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:category" component={Products} />
          <Route exact path="/products/:category/:productID" component={Product} />
        </UserProvider>
      </Switch>
    </Router>
  );
}

export default App;
