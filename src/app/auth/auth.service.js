export const authService = authServiceFunction;

authServiceFunction.$inject = ['$firebaseAuth', '$log'];

function authServiceFunction($firebaseAuth, $log) {
    const firebaseAuthObject = $firebaseAuth();

    const service = {
        registerUsingGoogle,
        registerUsingFacebook,
        registerUsingTwitter,
        registerUsingGithub,
        firebaseAuthObject,
        register,
        login,
        logout,
        isLoggedIn
    };

    return service;

    function registerUsingGoogle() {
        $log.info("Register Using Google");
        return firebaseAuthObject.$signInWithPopup("google");
    }

    function registerUsingFacebook() {
        $log.info("Register Using Google");
        return firebaseAuthObject.$signInWithPopup("facebook");
    }

    function registerUsingTwitter() {
        $log.info("Register Using Google");
        return firebaseAuthObject.$signInWithPopup("twitter");
    }

    function registerUsingGithub() {
        $log.info("Register Using Google");
        return firebaseAuthObject.$signInWithPopup("github");
    }

    function register(user) {
        return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
    }

    function login(user) {
        return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
    }

    function logout() {
        firebaseAuthObject.$signOut();
    }

    function isLoggedIn() {
        return firebaseAuthObject.$getAuth();
    }
}
