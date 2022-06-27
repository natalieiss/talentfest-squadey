import { app } from "./firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

export function createUser(name, email, password) {
    return createUserWithEmailAndPassword(auth, name, email, password).then(
    (userCredential) => {
        const user = userCredential.user;
        return user;
    });
}

