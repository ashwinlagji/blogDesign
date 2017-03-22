export const gzAuthForm = {
    templateUrl: 'app/auth/authForm.html',
    restrict: 'E',
    controller: AuthFormController,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
        error: '=',
        formTitle: '@',
        submitAction: '&'
    }
};

function AuthFormController() {
    const vm = this;

    vm.user = {
        email: '',
        password: ''
    };
}
