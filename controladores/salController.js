const admin = require('firebase-admin');
const db = admin.firestore();

// Obtener todos los productos de sal de Exito desde Firestore
const getAllSalExito = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito')
        .collection('salExito')
        .get();

    const salExitoData = snapshot.docs.map(doc => doc.data());
    return salExitoData;
}

// Obtener todos los productos de sal de Carulla desde Firestore
const getAllSalCarulla = async () => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla')
        .collection('salCarulla')
        .get();

    const salCarullaData = snapshot.docs.map(doc => doc.data());
    return salCarullaData;
}

// Obtener un producto de sal de Exito por su nombre desde Firestore
const getSalExitoByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('exito')
        .collection('salExito')
        .where('Nombre', '==', name)
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data());
    }
}

// Obtener un producto de sal de Carulla por su nombre desde Firestore
const getSalCarullaByName = async (name) => {
    const snapshot = await db.collection('data-dummy')
        .doc('carulla')
        .collection('salCarulla')
        .where('Nombre', '==', name)
        .get();

    if (snapshot.empty) {
        return { message: "Producto no encontrado", error: true };
    } else {
        return snapshot.docs.map(doc => doc.data());
    }
}

module.exports = {
    getAllSalExito,
    getAllSalCarulla,
    getSalExitoByName,
    getSalCarullaByName
};
