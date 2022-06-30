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

export const createOccurrence = async ( tipo, tipo_veiculo, imagem, descrição, reserva,apoId) => {
  try {
    const numberID = `ID-${Math.floor(Math.random()*100000000000)}`;
    const sinRef =  {
      sin_id: numberID,
      sin_tipo: tipo,
      sin_descricao: descrição,
      sin_data: new Date().toLocaleString('pt-br'),
      vei_tipo_veiculo: tipo_veiculo,
      vei_imagem: imagem,
      vei_reserva:reserva,
      apo_codigo: apoId,
      use_id: auth.currentUser.uid,
    };
    const docRef = await setDoc(doc(db, "SINISTROS", numberID), sinRef);
    return docRef;
  } catch (error) {
    console.log("Erro ao adicionar documento: ", error);
  }
};



