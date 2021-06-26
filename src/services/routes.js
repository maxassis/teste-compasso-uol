import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../templates/Home/index'
import User from '../templates/User/index'

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/user">
        <User />
      </Route>

    </Switch>
  </BrowserRouter>
  );
}