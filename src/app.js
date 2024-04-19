import express from "express";
const app = express(); 
const PUERTO = 8080; 

//Expresiones regulares: son herramientas que nos permiten validar diferentes patrones en algunas cadenas de texto. 

//Ejemplo: validar si el texto ingresado por el usuario corresponde a un email:  nombre@dominio.com

//CORREO ELECTRONICO: 

let correoIngresado = "lionel@messi.com"; 
let correoFalso = "tinkiwinki";

const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//console.log(patronCorreo.test(correoIngresado));
console.log(patronCorreo.test(correoFalso));
