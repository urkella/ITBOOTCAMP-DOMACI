import axios from "axios";

export const getAllProducts = () => axios.get("http://localhost:3000/products");
export const getProductById = (id) =>
  axios.get(`http://localhost:3000/products/${id}`);
