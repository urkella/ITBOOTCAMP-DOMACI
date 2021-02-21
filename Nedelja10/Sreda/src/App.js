import { useState } from "react";
import CreateQuote from "./components/CreateQuote";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Quotes from "./components/Quotes.jsx";
import Register from "./components/Register.jsx";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Quote from "./components/Quote";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <nav>
        <Link style={{ padding: 5 }} to="/">
          Home
        </Link>
        <Link style={{ padding: 5 }} to="/quotes">
          Quotes
        </Link>
        <Link style={{ padding: 5 }} to="/createquote">
          CreateQuote
        </Link>
        {user ? (
          <>
            <span>{user.username}</span>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <>
            <Link style={{ padding: 5 }} to="/login">
              Login
            </Link>
            <Link style={{ padding: 5 }} to="/register">
              Register
            </Link>
          </>
        )}
      </nav>
      <Switch>
        <Route exact path="/quotes/:id">
          <Quote loggedIn={user} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/quotes">
          <Quotes loggedIn={user} />
        </Route>
        <Route path="/createquote">
          <CreateQuote loggedIn={user} />
        </Route>
        <Route path="/">
          <Home loggedIn={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
