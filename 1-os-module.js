// Leer README

const os = require('os');

const memoryInGb = (os.totalmem() / Math.pow(1024, 3)).toFixed(1);

console.log(`Nombre del equipo: ${os.hostname()}`);
console.log(`Edición/Versión del sistema operativo: ${os.version()}`)
console.log(`Memoria RAM total: ${memoryInGb} GB`);