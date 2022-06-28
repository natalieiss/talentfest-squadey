import { app } from "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const auth = getAuth(app);

export function userLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}
