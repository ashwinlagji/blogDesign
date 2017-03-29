function loginController($log, authService) {
    $log.info("login Component");
    const self = this;
    self.loginWithGoogle = () => {
        $log.info("login with google...");
        const promise = authService.registerUsingGoogle();
        promise.then(result => {
            $log.info(result);
        });
    };

    self.loginWithFacebook = () => {
        $log.info("login with google...");
        const promise = authService.registerUsingFacebook();
        promise.then(result => {
            $log.info(result);
        });
    };

    self.loginWithTwitter = () => {
        $log.info("login with google...");
        const promise = authService.registerUsingTwitter();
        promise.then(result => {
            $log.info(result);
        });
    };

    self.loginWithGithub = () => {
        $log.info("login with google...");
        const promise = authService.registerUsingGithub();
        promise.then(result => {
            $log.info(result);
        });
    };
}

loginController.$inject = ['$log', 'authService'];

export const Login = {
    template: require('./login.component.html'),
    controller: loginController,
    controllerAs: 'loginCtrl'
};
