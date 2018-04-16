import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Booking from './components/booking';
import Confirmation from './components/confirmation';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/" component={Booking} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;