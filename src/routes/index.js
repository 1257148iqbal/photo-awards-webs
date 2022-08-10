import React from "react";
import { Route, Switch } from "react-router";
import Error404 from "../pages/404";
import Archive from "../pages/Archive";
import ContactUs from "../pages/ContactUs";
import Contest from "../pages/Contest";
import EntryForm from "../pages/EntryForm/EntryForm";
import EntryRules from "../pages/EntryRules";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Results from "../pages/Results/CountTime";
import Status from "../pages/Status";

const Routes = () => {
  return (
    <React.Fragment> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/entry-rules" exact component={EntryRules} />
        <Route path="/entry-form" exact component={EntryForm} />
        <Route path="/payment" component={Payment} />
        <Route path="/status" component={Status} />
        <Route path="/results" component={Results} />
        <Route path="/archive" component={Archive} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/contest" component={Contest} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
