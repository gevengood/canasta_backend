const admin = require('firebase-admin');
const db = admin.firestore();

// Obtener todos los productos de aceite de Exito desde Firestore
const getAllAceiteExito = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito') // Subcolección 'exito' dentro de 'data-dummy'
        .collection('aceiteExito') // Subcolección 'aceiteExito'
        .get(); // Obtenemos todos los documentos

    const aceiteExitoData = snapshot.docs.map(doc => doc.data()); // Usamos el ID generado automáticamente
    return aceiteExitoData;
}

// Obtener todos los productos de aceite de Carulla desde Firestore
const getAllAceiteCarulla = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla') // Subcolección 'carulla' dentro de 'data-dummy'
        .collection('aceiteCarulla') // Subcolección 'aceiteCarulla'
        .get(); // Obtenemos todos los documentos

    const aceiteCarullaData = snapshot.docs.map(doc => doc.data()); // Usamos el ID generado automáticamente
    return aceiteCarullaData;
}

// Obtener un producto de aceite de Exito por su nombre desde Firestore
const getAceiteExitoByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito') // Subcolección 'exito' dentro de 'data-dummy'
        .collection('aceiteExito') // Subcolección 'aceiteExito'
        .where('Nombre', '==', name) // Buscamos el producto por nombre
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data()); // Usamos el ID generado automáticamente
    }
}

// Obtener un producto de aceite de Carulla por su nombre desde Firestore
const getAceiteCarullaByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla') // Subcolección 'carulla' dentro de 'data-dummy'
        .collection('aceiteCarulla') // Subcolección 'aceiteCarulla'
        .where('Nombre', '==', name) // Buscamos el producto por nombre
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data()); // Usamos el ID generado automáticamente
    }
}

module.exports = {
    getAllAceiteExito,
    getAllAceiteCarulla,
    getAceiteExitoByName,
    getAceiteCarullaByName
};
