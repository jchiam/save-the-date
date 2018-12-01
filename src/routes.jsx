import React from 'react';
import { Switch, Route } from 'react-router';

import SaveTheDate from 'SaveTheDate';

export default(
  <Switch>
    <Route exact path="/solemnisation" component={SaveTheDate} />
    <Route exact path="/solemnisation-banquet" component={SaveTheDate} />
  </Switch>
);
