const admin = require('firebase-admin');
const db = admin.firestore();

// Obtener todos los productos de azúcar de Exito desde Firestore
const getAllAzucarExito = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito')
        .collection('azucarExito')
        .get();

    const azucarExitoData = snapshot.docs.map(doc => doc.data());
    return azucarExitoData;
}

// Obtener todos los productos de azúcar de Carulla desde Firestore
const getAllAzucarCarulla = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla')
        .collection('azucarCarulla')
        .get();

    const azucarCarullaData = snapshot.docs.map(doc => doc.data());
    return azucarCarullaData;
}

// Obtener un producto de azúcar de Exito por su nombre desde Firestore
const getAzucarExitoByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito')
        .collection('azucarExito')
        .where('Nombre', '==', name)
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data());
    }
}

// Obtener un producto de azúcar de Carulla por su nombre desde Firestore
const getAzucarCarullaByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla')
        .collection('azucarCarulla')
        .where('Nombre', '==', name)
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data());
    }
}

module.exports = {
    getAllAzucarExito,
    getAllAzucarCarulla,
    getAzucarExitoByName,
    getAzucarCarullaByName
};
