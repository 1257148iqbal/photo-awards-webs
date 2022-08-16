import "bootstrap/dist/css/bootstrap.min.css";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import "../src/assets/scss/custom-form.scss";
import "./App.css";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import configureStore, { history } from "./redux/store";
import Routes from "./routes";

export const store = configureStore();

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Navbar />
        <Switch>
          <Routes />
        </Switch>
        <Footer />
      </ConnectedRouter>
    </Provider>
  </BrowserRouter>
);

export default App;
