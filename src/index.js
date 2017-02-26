import angular from 'angular';

import {
  techsModule
} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {
  main
} from './app/main';
import {
  header
} from './app/header';
import {
  title
} from './app/title';
import {
  footer
} from './app/footer';

import './index.css';
import './public/Styleshets/header.sass';
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-material/angular-material.css';
import './icon-file.css';
// import 'angular-ui-bootstrap';
import 'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js';
import 'angular-ui-bootstrap/dist/ui-bootstrap-csp.css';
import 'angular-ui-bootstrap/dist/ui-bootstrap.js';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

angular
  .module('app', [techsModule, 'ui.router', 'ui.bootstrap', 'ngMaterial'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer)
  .directive('setClassWhenAtTop', $window => {
    const $win = angular.element($window);

    return {
      restrict: "A",
      link: (scope, element, attrs) => {
        const topClass = attrs.setClassWhenAtTop;
        const topPadding = parseInt(attrs.paddingWhenAtTop, 10);
        const parent = element.parent();
        let offsetTop;

        $win.on("scroll", () => {
          // dynamic page layout so have to recalculate every time;
          // take offset of parent because after the element gets fixed
          // it now has a different offset from the top
          offsetTop = parent.offset().top - topPadding;
          if ($win.scrollTop() >= offsetTop) {
            element.addClass(topClass);
            parent.height(element.height());
          } else {
            element.removeClass(topClass);
            parent.css("height", null);
          }
        });
      }
    };
  });
