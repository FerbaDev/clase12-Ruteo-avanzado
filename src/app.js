import express from "express";
const app = express(); 
const PUERTO = 8080;
import clientesRouter from "./routes/clientes.router.js";


//Expresiones regulares: son herramientas que nos permiten validar diferentes patrones en algunas cadenas de texto. 

//Ejemplo: validar si el texto ingresado por el usuario corresponde a un email:  nombre@dominio.com

//CORREO ELECTRONICO: 

let correoIngresado = "lionel@messi.com"; 
let correoFalso = "tinkiwinki";

const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//console.log(patronCorreo.test(correoIngresado));
console.log(patronCorreo.test(correoFalso));

//NUMERO TELEFONO: 

//Esperamos este formato: (xxx) xxx-xxxx

const patronTelefono = /\(\d{3}\) \d{3}-\d{4}/;
let telefonoIngresado = "(223) 669-1111";

console.log("Verificamos un tel: " + patronTelefono.test(telefonoIngresado));

//Restringiendo Parámetros: 
//Rutas
app.use("/clientes", clientesRouter);

//¿Que hacer con todas las rutas que no coinciden con ningún endpoint? 

app.get("*", (req, res) => {
  res.status(404).send({message: "Recurso no encontrado"});
})

//Listen
app.listen(PUERTO, () => {
    console.log(`Conectado al servidor en http://localhost:${PUERTO}`);
  });