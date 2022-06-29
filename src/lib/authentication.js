import {app} from "./firebaseConfig"
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const auth = getAuth(app);

export function userLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
  return signOut(auth);
}

export function authChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user !== null);
  });
}
