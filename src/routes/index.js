import React from "react";
import { Route, Switch } from "react-router";
import Error404 from "../pages/404";
import Archive from "../pages/Archive";
import ContactUs from "../pages/ContactUs";
import Contest from "../pages/Contest";
import ContestSection from "../pages/ContestSection";
import EntryForm from "../pages/EntryForm/EntryForm";
import EntryRules from "../pages/EntryRules";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Participant from "../pages/Participant";
import Payment from "../pages/Payment";
import Profile from "../pages/Profile/Profile";
import Results from "../pages/Results/CountTime";
import Status from "../pages/Status";
import ContestSectionForm from "../parts/contestSection/form/ContestSectionForm";

const Routes = () => {
  return (
    <React.Fragment> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/entry-rules" component={EntryRules} />
        <Route exact path="/entry-form" component={EntryForm} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/status" component={Status} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/contest" component={Contest} />
        <Route exact path="/contest-section" component={ContestSection} />
        <Route exact path="/participant" component={Participant} />
        <Route exact path="/contest-section-page" component={ContestSectionForm} />
        <Route exact path="/profile" component={Profile} />
        <Route exact component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
