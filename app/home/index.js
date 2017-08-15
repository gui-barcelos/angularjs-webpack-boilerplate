import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './home.routes';

import HomeController from './home.controller';

import HomeSevice from './home.service';

// declare module
export default angular.module('app.home', [uirouter])
    .config(routes)
    .controller('HomeController', HomeController)
    .service('HomeService', HomeSevice)
    .name;