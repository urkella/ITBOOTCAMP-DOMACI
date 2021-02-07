import { useState } from "react";
import { ShoppingList } from "./components";
import { shoppingList } from "./custom-config";
import { removeWithId, calculatePrices } from "./util/helpers";

// Assets
import logo from "./assets/logo.svg";
import "./App.css";

const App = () => {
  // If this would've been class component
  // we would be able to use React.useState()
  const [list, setList] = useState(shoppingList);

  // Current shopping list price
  const totalPrice = calculatePrices(list);

  // Remove element from shopping list
  // with given ID
  const removeShoppingItem = (id) => {
    const newList = removeWithId(list, id);

    return setList(newList); // Triggers re-render
  };

  // Title
  const shoppingListLength = list?.length;
  const title = `Shopping List (${shoppingListLength}) - ${totalPrice}`;

  // Store results
  const displayShoppingList = list.map((list) => {
    const key = list.key; // List key
    return (
      <ShoppingList
        {...list}
        key={key}
        className="App-list"
        removeShoppingItem={() => removeShoppingItem(key)}
      />
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <h3 className="App-heading">{title}</h3>
        {/* Display results */}
        <div className="App-results-wrapper">{displayShoppingList}</div>
      </header>
    </div>
  );
};

export default App;
