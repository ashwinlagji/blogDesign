function loginController($log) {
    $log.info("login Component");
}

loginController.$inject = ['$log'];

export const Login = {
    template: require('./login.component.html'),
    controller: loginController,
    controllerAs: 'loginCtrl'
};
