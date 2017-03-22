function postController($log) {
    $log.info("POst Component");

    const self = this;
    self.postImageUrl = 'http://3.bp.blogspot.com/-xUiI8Gt_QyM/VmgGaFQcp3I/AAAAAAAAIrY/pmC0lS28CWI/s1600/btemplates-aquarium-by-francisco-oliveros.jpg';
}

postController.$inject = ['$log'];

export const post = {
    template: require('./post.component.html'),
    controller: postController,
    controllerAs: 'postCtrl'
};
