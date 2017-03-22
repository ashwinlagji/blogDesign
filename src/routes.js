export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/Blog');

    $stateProvider
        .state('app', {
            url: '/Blog',
            component: 'app'
        })
        .state('post', {
            url: '/post',
            component: 'post'
        })
        .state('app.home', {
            url: '/home',
            component: 'homePage'
        }).state('app.register', {
            url: '/register',
            component: 'register'
        });
}
