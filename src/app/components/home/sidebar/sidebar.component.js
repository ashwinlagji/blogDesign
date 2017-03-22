function sidebarController($log) {
    $log.info("sideBar Controller..");
}

sidebarController.$inject = ['$log'];

export const sideBar = {
    template: require('./sidebar.component.html'),
    controller: sidebarController,
    controllerAs: 'sidebarCtrl'
};
