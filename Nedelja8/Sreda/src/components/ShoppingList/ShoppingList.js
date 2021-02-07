import { string, func } from "prop-types";

import remove from "../../assets/cancel.svg";
import "./ShoppingList.css";

const REMOVE_ALT_NAME = "Remove";

const ShoppingList = (props) => {
  const { className, name, price, removeShoppingItem } = props; // Props from parent component

  // With parent className
  const classes = `${className} ShoppingList`;
  return (
    <div className={classes}>
      <span
        className="ShoppingList-delete"
        title={REMOVE_ALT_NAME}
        onClick={removeShoppingItem}
      >
        <img
          className="ShoppingList-remove"
          src={remove}
          alt={REMOVE_ALT_NAME}
        />
      </span>
      <h5 className="ShoppingList-heading">{name}</h5>
      <span className="ShoppingList-price">{price}</span>
    </div>
  );
};

ShoppingList.defaultProps = {
  className: null,
  name: null,
  price: null,
  removeShoppingItem: null,
};

ShoppingList.propTypes = {
  className: string,
  name: string.isRequired,
  price: string.isRequired,
  removeShoppingItem: func.isRequired,
};

export default ShoppingList;
