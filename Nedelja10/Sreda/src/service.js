import axios from "axios";

export const getAllUsers = () => axios.get("http://localhost:3000/users");
export const getAllQuotes = () => axios.get("http://localhost:3000/quotes");
export const getQuoteById = (id) =>
  axios.get(`http://localhost:3000/quotes/${id}`);

export const registerUser = (username, email, password) =>
  axios.post("http://localhost:3000/users", { username, email, password });
export const addQuote = (text, author) =>
  axios.post("http://localhost:3000/quotes", { text, author });
