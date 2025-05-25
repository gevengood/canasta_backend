const express = require("express");
const cors = require("cors");  
const admin = require('firebase-admin');

// Asegúrate de que el archivo de clave de servicio de Firebase esté en la ruta correcta
const serviceAccount = require('./config/canasta-backend-firebase-adminsdk-fbsvc-4c4d39c140.json'); // Reemplaza con la ruta correcta a tu archivo JSON de clave privada

// Inicializa Firebase Admin SDK con la clave privada
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Importar los controladores
const { getAllAceiteExito, getAllAceiteCarulla, getAceiteExitoByName, getAceiteCarullaByName } = require("./controladores/aceiteController");
const { getAllArrozExito, getAllArrozCarulla, getArrozExitoByName, getArrozCarullaByName } = require("./controladores/arrozController");
const { getAllAzucarExito, getAllAzucarCarulla, getAzucarExitoByName, getAzucarCarullaByName } = require("./controladores/azucarController");
const { getAllFrijolExito, getAllFrijolCarulla, getFrijolExitoByName, getFrijolCarullaByName } = require("./controladores/frijolController");
const { getAllPanExito, getAllPanCarulla, getPanExitoByName, getPanCarullaByName } = require("./controladores/panController");
const { getAllSalExito, getAllSalCarulla, getSalExitoByName, getSalCarullaByName } = require("./controladores/salController");

const app = express();
const port = 1721;

const corsOptions = {
  origin: "https://canasta-frontend.vercel.app",  // Solo permite solicitudes desde esta URL
  methods: ["GET"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Cabeceras permitidas
};

app.use(cors(corsOptions));  // Aplica las configuraciones CORS

app.use(express.json());

// Endpoints para obtener productos de aceite
app.get("/productos/aceite/exito", async (req, res) => {
  try {
    const response = await getAllAceiteExito();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

app.get("/productos/aceite/carulla", async (req, res) => {
  try {
    const response = await getAllAceiteCarulla();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

// Endpoint para obtener un producto de aceite por su nombre
app.get("/productos/aceite/exito/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getAceiteExitoByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

app.get("/productos/aceite/carulla/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getAceiteCarullaByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

// Endpoints para obtener productos de arroz
app.get("/productos/arroz/exito", async (req, res) => {
  try {
    const response = await getAllArrozExito();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

app.get("/productos/arroz/carulla", async (req, res) => {
  try {
    const response = await getAllArrozCarulla();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

// Endpoint para obtener un producto de arroz por su nombre
app.get("/productos/arroz/exito/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getArrozExitoByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

app.get("/productos/arroz/carulla/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getArrozCarullaByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

// Endpoints para obtener productos de azúcar
app.get("/productos/azucar/exito", async (req, res) => {
  try {
    const response = await getAllAzucarExito();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

app.get("/productos/azucar/carulla", async (req, res) => {
  try {
    const response = await getAllAzucarCarulla();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

// Endpoint para obtener un producto de azúcar por su nombre
app.get("/productos/azucar/exito/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getAzucarExitoByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

app.get("/productos/azucar/carulla/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getAzucarCarullaByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

// Endpoints para obtener productos de frijol
app.get("/productos/frijol/exito", async (req, res) => {
  try {
    const response = await getAllFrijolExito();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

app.get("/productos/frijol/carulla", async (req, res) => {
  try {
    const response = await getAllFrijolCarulla();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

// Endpoint para obtener un producto de frijol por su nombre
app.get("/productos/frijol/exito/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getFrijolExitoByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

app.get("/productos/frijol/carulla/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getFrijolCarullaByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

// Endpoints para obtener productos de pan
app.get("/productos/pan/exito", async (req, res) => {
  try {
    const response = await getAllPanExito();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

app.get("/productos/pan/carulla", async (req, res) => {
  try {
    const response = await getAllPanCarulla();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

// Endpoint para obtener un producto de pan por su nombre
app.get("/productos/pan/exito/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getPanExitoByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

app.get("/productos/pan/carulla/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getPanCarullaByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

// Endpoints para obtener productos de sal
app.get("/productos/sal/exito", async (req, res) => {
  try {
    const response = await getAllSalExito();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

app.get("/productos/sal/carulla", async (req, res) => {
  try {
    const response = await getAllSalCarulla();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
});

// Endpoint para obtener un producto de sal por su nombre
app.get("/productos/sal/exito/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getSalExitoByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

app.get("/productos/sal/carulla/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await getSalCarullaByName(name);
    if (response.error) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
