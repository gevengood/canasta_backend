const admin = require('firebase-admin');
const db = admin.firestore();

// Obtener todos los productos de pan de Exito desde Firestore
const getAllPanExito = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito')
        .collection('panExito')
        .get();

    const panExitoData = snapshot.docs.map(doc => doc.data());
    return panExitoData;
}

// Obtener todos los productos de pan de Carulla desde Firestore
const getAllPanCarulla = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla')
        .collection('panCarulla')
        .get();

    const panCarullaData = snapshot.docs.map(doc => doc.data());
    return panCarullaData;
}

// Obtener un producto de pan de Exito por su nombre desde Firestore
const getPanExitoByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito')
        .collection('panExito')
        .where('Nombre', '==', name)
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data());
    }
}

// Obtener un producto de pan de Carulla por su nombre desde Firestore
const getPanCarullaByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla')
        .collection('panCarulla')
        .where('Nombre', '==', name)
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data());
    }
}

module.exports = {
    getAllPanExito,
    getAllPanCarulla,
    getPanExitoByName,
    getPanCarullaByName
};
