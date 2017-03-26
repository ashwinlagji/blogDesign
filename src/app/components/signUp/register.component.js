function registerController($log) {
    $log.info("register Component");

    const self = this;
    self.topDirections = ['left', 'up'];
    self.bottomDirections = ['down', 'right'];

    self.isOpen = true;

    self.availableModes = ['md-fling', 'md-scale'];
    self.selectedMode = 'md-fling';

    self.availableDirections = ['up', 'down', 'left', 'right'];
    self.selectedDirection = 'right';
}

registerController.$inject = ['$log'];

export const Register = {
    template: require('./register.component.html'),
    controller: registerController,
    controllerAs: 'registerCtrl'
};
