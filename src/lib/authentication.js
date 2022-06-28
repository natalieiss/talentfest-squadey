import {app} from "./firebaseConfig"
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
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
}

export function logout() {
  return signOut(auth);
}

