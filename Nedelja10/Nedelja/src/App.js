import Home from "./components/Home.jsx";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import Products from "./components/Products";
import Categories from "./components/Categories";
import ProductByCategory from "./components/ProductByCategory";

const App = () => {
  return (
    <Router>
      <nav>
        <Link style={{ padding: 5 }} to="/">
          Home
        </Link>
        <Link style={{ padding: 5 }} to="/categories">
          Categories
        </Link>
      </nav>
      <Switch>
        <Route exact path="/products/:id">
          <Product />
        </Route>
        <Route exact path="/products/categories/:category">
          <ProductByCategory />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
