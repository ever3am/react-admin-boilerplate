import React from 'react';
import { Switch, Route } from 'react-router';

import Login from '../Login/Login';
import Main from '../Main/Main';

const routes = (
	<Switch>
		<Route exact path="/" component={Main}></Route>
    <Route path="/login" component={Login}></Route>
  </Switch>
);

export default routes;
