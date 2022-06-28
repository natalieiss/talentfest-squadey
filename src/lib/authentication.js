import {app} from "./firebaseConfig"
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const auth = getAuth(app);

/*export function createUser(name, email, password) {
    return createUserWithEmailAndPassword(auth, name, email, password).then(
    (userCredential) => {
        const user = userCredential.user;
        return user;
    });
}*/

export function userLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
};
