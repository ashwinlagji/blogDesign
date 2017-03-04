function headerController($log) {
  const self = this;
  self.message = "headercontroller";
  $log.info("header controller ${self.message}");
}

headerController.$inject = ['$log'];

export const header = {
  template: require('./header.html'),
  controller: headerController,
  controllerAs: 'headerCtrl'
};
