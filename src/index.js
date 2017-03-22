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
} from './app/components/header/header';
import {
    title
} from './app/components/main/title';
import {
    footer
} from './app/components/footer/footer';

import {
    post
} from './app/components/post/post.component';

import {
    homePage
} from './app/components/home/home.component';
import {
    sideBar
} from './app/components/home/sidebar/sidebar.component';

import {
    authModule
} from './app/auth/auth.module';
import {
    Register
} from './app/components/signUp/register.component';

import './index.css';
import './public/Styleshets/header.sass';
import './public/Styleshets/main.sass';
import './public/Styleshets/footer.sass';
import './public/Styleshets/post.component.sass';
import './public/Styleshets/home.component.sass';

import 'bootstrap/dist/css/bootstrap.css';
import 'angular-material/angular-material.css';
import './icon-file.css';
// import 'angular-ui-bootstrap';
import 'angular-ui-bootstrap/dist/ui-bootstrap-csp.css';
import 'angular-ui-bootstrap/dist/ui-bootstrap.js';
import 'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angularfire';
import 'material-design-icons';

angular
    .module('app', [techsModule, 'ui.router', 'ui.bootstrap', 'ngMaterial', 'ngAnimate', 'ngAria', 'firebase', authModule])
    .config(routesConfig)
    .component('app', main)
    .component('fountainHeader', header)
    .component('fountainTitle', title)
    .component('fountainFooter', footer)
    .component('post', post)
    .component('homePage', homePage)
    .component('register', Register)
    .component('sideBar', sideBar)
    .config($mdIconProvider => {
        $mdIconProvider
            .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    })
    .directive('setClassWhenAtTop', ($window, $log) => {
        const $win = angular.element($window);

        return {
            restrict: "A",
            link: (scope, element, attrs) => {
                const topClass = attrs.setClassWhenAtTop; // get CSS class from directive's attribute value
                const offsetTop = 70; // get element's top relative to the document

                $win.on('scroll', () => {
                    $log.warn($window.scrollY);
                    if ($win.scrollY >= offsetTop) {
                        element.addClass(topClass);
                    } else {
                        element.removeClass(topClass);
                    }
                });
            }
        };
    });
