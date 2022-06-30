import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
  where,
  doc,
  setDoc,
} from 'firebase/firestore';
import { auth } from './authentication';
import { app } from "./firebaseConfig";

export const db = getFirestore(app);

export const getPolicy = async (userId) => {
  const cardsArray = [];
  const collectionSortedByDate = query(
    collection(db, 'APOLICES'),
    orderBy('apo_data_fim', 'desc'),
    where("usu_id" , '==',userId)
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

export const createOccurrence = async ( formValue, apoId) => {
  console.log(formValue)
  try {
    const numberID = `ID-${Math.floor(Math.random()*100000000000)}`;
    const sinRef =  {
      sin_id: numberID,
      sin_tipo: formValue.sin_tipo,
      sin_descricao: formValue.sin_descricao,
      sin_data: new Date().toLocaleString('pt-br'),
      vei_tipo_veiculo: formValue.vei_tipo_veiculo,
      vei_imagem: formValue.vei_imagem,
      vei_reserva:formValue.vei_reserva,
      apo_codigo: apoId,
      use_id: auth.currentUser.uid,
    };
    const docRef = await setDoc(doc(db, "SINISTROS", numberID), sinRef);
    console.log(docRef)
    return docRef;
  } catch (error) {
    console.log("Erro ao adicionar documento: ", error);
  }
};

export const getOccurrence = async (userId) => {
  const cardsArray = [];
  const collectionSortedByDate = query(
    collection(db, 'SINISTROS'),
    orderBy('sin_data', 'desc'),
    where("use_id" , '==',userId)
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



