(function () {
    'use strict';

    angular
    .module('app.auth')
    .controller('AuthController', AuthController);

    AuthController.$inject = ['$location', 'authService'];

    function AuthController($location, authService) {
        const vm = this;

        vm.error = null;

        vm.register = register;
        vm.login = login;

        function register(user) {
            return authService.registerUsingGoogle(user)
        .then(() => {
            return vm.login(user);
        })
        .then(() => {
            return authService.sendWelcomeEmail(user.email);
        })
        .catch(error => {
            vm.error = error;
        });
        }

        function login(user) {
            return authService.registerUsingGoogle(user)
        .then(() => {
            $location.path('/waitlist');
        })
        .catch(error => {
            vm.error = error;
        });
        }
    }
})();
