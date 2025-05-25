const admin = require('firebase-admin');
const db = admin.firestore();

// Obtener todos los productos de arroz de Exito desde Firestore
const getAllArrozExito = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito')
        .collection('arrozExito')
        .get();

    const arrozExitoData = snapshot.docs.map(doc => doc.data());
    return arrozExitoData;
}

// Obtener todos los productos de arroz de Carulla desde Firestore
const getAllArrozCarulla = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla')
        .collection('arrozCarulla')
        .get();

    const arrozCarullaData = snapshot.docs.map(doc => doc.data());
    return arrozCarullaData;
}

// Obtener un producto de arroz de Exito por su nombre desde Firestore
const getArrozExitoByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito')
        .collection('arrozExito')
        .where('Nombre', '==', name)
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data());
    }
}

// Obtener un producto de arroz de Carulla por su nombre desde Firestore
const getArrozCarullaByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla')
        .collection('arrozCarulla')
        .where('Nombre', '==', name)
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data());
    }
}

module.exports = {
    getAllArrozExito,
    getAllArrozCarulla,
    getArrozExitoByName,
    getArrozCarullaByName
};
