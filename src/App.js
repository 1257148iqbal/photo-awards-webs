import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import "../src/assets/scss/custom-form.scss";
import "./App.css";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import store from "./redux/store";
import Routes from "./routes";


const App = () => (
  <BrowserRouter>
    <Provider store={store}>
        <Navbar />
        <Switch>
          <Routes />
        </Switch>
        <Footer />
    </Provider>
  </BrowserRouter>
);

export default App;
