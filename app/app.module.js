import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './app.routes';
import home from './home';

import constants from './shared/constants';

import css from './assets/css/index.css';
import stylus from './assets/stylus/index.styl';

angular.module('app', [uirouter, home, constants])
    .config(routes);