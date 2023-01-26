/*Pedir al ususario sus datos para poder ingresar*/

const nombre = prompt("Ingrese el nombre");
const apellido = prompt("Ingrese su Apellido");
const edad = parseInt(prompt("Ingrese la edad"));

/*Condiciones para poder ingresar*/

if (edad >= 18 && nombre == "Elvio" && apellido == "Rodriguez") {
  alert("Acceso permitido");
} else {
  alert("Acceso denegado");
}

/*Porcentaje a cobrar segun el dia*/

const diadecobro = prompt("Ingrese un día");
switch (diadecobro) {
  case "Lunes":
  case "Martes":
    console.log("Se cobra un 20% mas");
    break;

  case "Miércoles":
  case "Jueves":
    console.log("Es mitad de semana, se cobra un 30% mas");
    break;
  case "Viernes":
  case "Sábado":
  case "Domingo":
    console.log("Es el fin de semana, se cobra un 50 % mas");
    break;

  default:
    console.log("Día inválido");
    break;
}
