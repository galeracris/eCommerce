import app from './firebase';
import { getFirestore } from 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';

export const db = getFirestore(app);

// Methods

export const addOrder = async (order) => {
  const ref = await addDoc(collection(db, 'ordenes'), order);

  return ref;
};
