import angular from 'angular';

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-material/angular-material.css';
import './icon-file.css';
import 'angular-ui-bootstrap';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

angular
  .module('app', [techsModule, 'ui.router', 'ui.bootstrap', 'ngMaterial'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
