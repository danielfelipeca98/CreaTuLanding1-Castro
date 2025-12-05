// src/services/firestoreService.js
import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "./firebase";

// Obtener todos los productos
export async function getProductsFromFirestore() {
  const productsCollection = collection(db, "productos");
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Obtener 1 solo producto
export async function getProductByIdFromFirestore(id) {
  const productDoc = doc(db, "productos", id);
  const snapshot = await getDoc(productDoc);

  if (!snapshot.exists()) return null;

  return { id: snapshot.id, ...snapshot.data() };
}

// Obtener por categoría
export async function getProductsByCategoryFromFirestore(categoryId) {
  const productsCollection = collection(db, "productos");
  const q = query(productsCollection, where("category", "==", categoryId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}
