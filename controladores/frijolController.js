const admin = require('firebase-admin');
const db = admin.firestore();

// Obtener todos los productos de frijol de Exito desde Firestore
const getAllFrijolExito = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito')
        .collection('frijolExito')
        .get();

    const frijolExitoData = snapshot.docs.map(doc => doc.data());
    return frijolExitoData;
}

// Obtener todos los productos de frijol de Carulla desde Firestore
const getAllFrijolCarulla = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla')
        .collection('frijolCarulla')
        .get();

    const frijolCarullaData = snapshot.docs.map(doc => doc.data());
    return frijolCarullaData;
}

// Obtener un producto de frijol de Exito por su nombre desde Firestore
const getFrijolExitoByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito')
        .collection('frijolExito')
        .where('Nombre', '==', name)
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data());
    }
}

// Obtener un producto de frijol de Carulla por su nombre desde Firestore
const getFrijolCarullaByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla')
        .collection('frijolCarulla')
        .where('Nombre', '==', name)
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data());
    }
}

module.exports = {
    getAllFrijolExito,
    getAllFrijolCarulla,
    getFrijolExitoByName,
    getFrijolCarullaByName
};
