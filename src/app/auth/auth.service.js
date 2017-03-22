export const authService = authServiceFunction;

authServiceFunction.$inject = ['$firebaseAuth', 'firebaseDataService', 'partyService', '$log'];

function authServiceFunction($firebaseAuth, firebaseDataService, partyService, $log) {
    const firebaseAuthObject = $firebaseAuth();

    const service = {
        registerUsingGoogle,
        firebaseAuthObject,
        register,
        login,
        logout,
        isLoggedIn,
        sendWelcomeEmail
    };

    return service;

    function registerUsingGoogle() {
        $log.info("Register Using Google");
        return firebaseAuthObject.$signInWithPopup("google");
//            .then(result => {
//            $log.info("Signed in as:", result.user.uid);
//            return result;
//        }).catch(error => {
//            $log.error("Authentication failed:", error);
//            return error;
//        });
    }

    function register(user) {
        return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
    }

    function login(user) {
        return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
    }

    function logout() {
        partyService.reset();
        firebaseAuthObject.$signOut();
    }

    function isLoggedIn() {
        return firebaseAuthObject.$getAuth();
    }

    function sendWelcomeEmail(emailAddress) {
        firebaseDataService.emails.push({
            emailAddress
        });
    }
}
