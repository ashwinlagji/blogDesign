import angular from 'angular';

import {
    gzAuthForm
} from './authForm.directive';
import {
    authService
} from './auth.service';

angular.module('app.auth', ['firebase'])
    .directive('gzAuthForm', () => {
        return gzAuthForm;
    })
    .factory('authService', authService);

export const authModule = 'app.auth';
