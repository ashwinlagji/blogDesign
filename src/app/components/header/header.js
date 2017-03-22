function headerController($log, $window, $scope) {
    const self = this;
    self.message = "headercontroller";
    self.deleted = true;
    self.important = false;
    self.error = false;
    self.headerScroll = false;
    $log.info(`header controller ${self.message}`);

    const $win = angular.element($window);

    const offsetTop = 130; // get element's top relative to the document

    $win.on('scroll', () => {
        let headerScroll = false;
        $log.warn(`scroll count : ${$window.scrollY}`);
        if ($window.scrollY >= offsetTop) {
            headerScroll = true;
        } else {
            headerScroll = false;
            $log.warn(`from header  ${headerScroll}`);
        }
        $scope.$apply(() => {
            self.headerScroll = headerScroll;
        });
    });
}

headerController.$inject = ['$log', '$window', '$scope'];

export const header = {
    template: require('./header.html'),
    controller: headerController,
    controllerAs: 'headerCtrl'
};
