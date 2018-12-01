/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension, react/no-children-prop */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { AppContainer } from 'react-hot-loader';

import routes from 'routes';

import 'styles/stylesheet.scss';

// check environment
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction || !!module.hot) {
  ReactDOM.render(
    <Router children={routes} history={createBrowserHistory()} />,
    document.getElementById('root'
  ));
} else {
  ReactDOM.render(
    <AppContainer>
      <Router children={routes} history={createBrowserHistory()} key={Math.random()} />
    </AppContainer>,
    document.getElementById('root')
  );
  module.hot.accept();
}
