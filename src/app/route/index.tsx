import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { nameApp } from '../../settings/domain';
import { routeConfig } from './router';

const RouteApp = () => {
  return (
    <Switch>
      {routeConfig.map((route, index) => (
        <RouteItem key={index} {...route} />
      ))}
      <Redirect to="/404"></Redirect>
    </Switch>
  );
};
const setTitleDocument = (name?: string) => {
  document.title = name || nameApp;
  console.log(name);
};
const RouteItem = (props?: any) => {
  return <Route {...props}>{setTitleDocument(props.name)}</Route>;
};
export default RouteApp;
