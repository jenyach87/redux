import { applyMiddleware, createStore, compose } from "redux";
import "./styles.css";
import { rootReducer } from "../src/redux/rootReducer";
import {
  asyncIncrement,
  changeTheme,
  decrement,
  increment,
} from "./redux/actions";
import thunk from "redux-thunk";
import logger from "redux-logger";

const counter = document.querySelector("#counter");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const asyncBtn = document.querySelector("#async");
const themeBtn = document.querySelector("#theme");

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log(store);
addBtn.addEventListener("click", function () {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});
store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme.value;
});
asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});

themeBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  store.dispatch(changeTheme(newTheme));
});

store.dispatch({ type: "INIT_APPLICATION" });
