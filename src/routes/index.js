import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home/index';
import Account from '../pages/account/index';
import Converter from '../pages/converter/index';
import Carrer from '../pages/carrer/index';
import Creditcard from '../pages/creditcard/index';
import Loan from '../pages/loan/index';
import Rewards from '../pages/rewards/index';
import About from '../pages/about/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/nuconta" component={Account} />
      <Route path="/cartaonu" component={Creditcard} />
      <Route path="/rewards" component={Rewards} />
      <Route path="/empréstimo" component={Loan} />
      <Route path="/sobre-nos" component={About} />
      <Route path="/Carreiras" component={Carrer} />
      <Route path="/converter" component={Converter} />
    </Switch>
  );
}
