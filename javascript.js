const nombreUsuario = prompt("Cómo te llamas?");
const nacimientoUsuario = prompt("Cuál es tu año de nacimiento?");
const mesNacimento = prompt("En qué mes naciste?");
let edadUsuario = 2019 - nacimientoUsuario;


mesNacimento != ("noviembre" && "diciembre") && console.log(`Tu edad es ${edadUsuario}`) || console.log(`Tu edad es ${edadUsuario - 1}`);