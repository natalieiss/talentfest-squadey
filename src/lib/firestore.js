import { 
  getFirestore, 
  collection, 
  addDoc,
  query,
  orderBy,
  getDocs, 
} from 'firebase/firestore';
import { app } from "./firebaseConfig";

export const db = getFirestore(app);

export const getApolice = async () => {
  const collectionSortedByDate = query(
    collection(db, 'APOLICES'),
    orderBy('data', 'asc'),
  );
  const arrCard = [];
  const querySnapshot = await getDocs(collectionSortedByDate);
  querySnapshot.forEach((doc) => {
    const history = doc.data();
    history.id = doc.id;
    arrCard.push(history);
  });
  return arrCard;
};

export const createSinistros = async () => {
  try {
    const docRef = await addDoc(collection(db, "SINISTROS"), {
      sin_id: "00000000",
      sin_data: "27/06/2022",
      sin_estado: "Solicitação Enviada",
      sin_preco: "1000",
      sin_sub_estado: "N/A",
      sin_tipo: "Colisão",
    });
    return docRef;
  } catch (e) {
    e("Erro ao adicionar documento: ", e);
  }
}

//salvar id da apolice

//visualizar sinistro
