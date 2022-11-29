/*!

=========================================================
* Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.strixdigital.in/product/material-dashboard-react
* Copyright 2020 Strix Digital (https://www.strixdigital.in)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Strix Digital

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import Signin from "views/Signin";
import User from "layouts/User";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/user" component={User} />
      <Route path="/rtl" component={RTL} />
      <Route path="/signin" component={Signin} />
      <Redirect from="/" to="/signin" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
