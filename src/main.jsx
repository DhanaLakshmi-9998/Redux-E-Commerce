import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import {  HashRouter } from "react-router-dom";
import ScrollToTop from "./scroll/scrollToTop.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import 'react-toastify/dist/ReactToastify.css';

let  persistor=persistStore(store)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
     <ScrollToTop/>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <ToastContainer position="top-right" autoClose={3000} />

      </PersistGate>
    </Provider>
    </HashRouter>
   

  </React.StrictMode>
);
