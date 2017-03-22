function registerController($log) {
    $log.info("register Component");

    const self = this;

    self.project = {
        description: 'Nuclear Missile Defense System',
        rate: 500,
        special: true
    };
}

registerController.$inject = ['$log'];

export const Register = {
    template: require('./register.component.html'),
    controller: registerController,
    controllerAs: 'registerCtrl'
};
