import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import './styles.css';

function App() {
  return (
    <div className="App">
      <h2>Hello from App.js</h2>
    </div>
  );
}

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
