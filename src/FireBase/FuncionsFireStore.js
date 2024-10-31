import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../FireBase/FireBase";

export const addChar = async (character) => {
  try {
    console.log("Datos a añadir:", character);
    const doc = await addDoc(collection(db, "PERSONAJES_FAVORITOS"), character);
    alert("Documento añadido con ID: " + doc.id);
  } catch (error) {
    alert("Error al añadir el documento: " + error.message);
  }
};

export async function getFavorites() {
  try {
    // 1. Crear una referencia a la colección
    const coleccionRef = collection(db, "PERSONAJES_FAVORITOS");

    // 2. Obtener todos los documentos de la colección referenciada.
    const documentos = await getDocs(coleccionRef);

    // 3. Convertir los documentos obtenidos en un array de datos.
    const arrayDocumentos = documentos.docs.map((doc) => ({
      id: doc.id, // 3a. Extrae el ID del documento.
      ...doc.data(), // 3b. Extrae todos los datos del documento.
    }));

    // 4. Imprimir el array de documentos en la consola.
    // console.log(arrayDocumentos);

    // 5. Devolver el array de documentos, permitiendo que la función sea utilizada de manera asincrónica.
    return arrayDocumentos;
  } catch (error) {
    // 6. Capturar y manejar cualquier error que ocurra en el bloque 'try'.
    console.error("Error al obtener documentos:", error.message);
  }
}
