import express from "express";
const router = express.Router();

router.get("/nombre/:cliente([a-z]+)", (req, res) => {
    //En esta situación yo estoy esperando un parametro por la URL, el nombre del cliente. 

    //Para evitar que el usuario ingrese su nombre con formatos no permitidos, usamos la expresiones regulares. 

    let cliente = req.params.cliente;
    res.send("cliente:" + cliente);
})

//Otra forma de hacerlo: 

router.get("/email/:email", (req, res) => {
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = req.params.email;

    if(patronCorreo.test(email)) {
        res.send("Email valido:" + email);
    } else {
        res.send("Email invalido");
    }
})























export default router; 