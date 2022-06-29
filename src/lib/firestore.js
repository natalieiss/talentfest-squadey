import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  where,
} from 'firebase/firestore';
import { auth } from './authentication';
import { app } from "./firebaseConfig";

export const db = getFirestore(app);

export const getPolicy = async () => {
  const cardsArray = [];
  const collectionSortedByDate = query(
    collection(db, 'APOLICES'),
    orderBy('apo_data_fim', 'desc'),
    //where("usu_id" , '==', userId)
  );
  try {
    const docSnap = await getDocs(collectionSortedByDate);
    docSnap.forEach((doc) => {
      const history = doc.data();
      history.apo_codigo = doc.id;
      cardsArray.push(history);
    })
    return cardsArray;
  } catch (error) {
    console.log("Erro ao receber documento: ", error);
  }
}

export const createOccurrence = async (id, estado, subEstado, preco, tipo, apoId) => {
  try {
    const docRef = await addDoc(collection(db, "SINISTROS"), {
      sin_id: id,
      sin_data: new Date().toLocaleString('pt-br'),
      sin_estado: estado,
      sin_sub_estado: subEstado,
      sin_preco: preco,
      sin_tipo: tipo,
      use_id: auth.currentUser.uid,
      apo_codigo: apoId,
    });
    return docRef;
  } catch (error) {
    console.log("Erro ao adicionar documento: ", error);
  }
};
