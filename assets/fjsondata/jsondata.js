const cv_persona = {
    per_nombre: "Sebastian Zhinin",
    per_fnacimiento:"1987-09-05",
    per_edad: 35,
    per_genero: "masculino",
    per_ocupacion: ["Soy un apacionado del","desarrollo web","de Ecuador."]    
  };
//   function cl_edad(in_edad){
//     const fechaNacimiento = new Date(in_edad); // fecha de nacimiento en formato yyyy-mm-dd
//     const hoy = new Date(); // fecha actual
//     const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
//     // Ajustar la edad si aún no se ha cumplido el cumpleaños este año
//     if (hoy < new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate())) {
//         edad--;
//     }
//     return edad;
// }

// Acceder al objeto persona
const miPersona = cv_persona;
// Mostrar información de la persona en la página
document.getElementById("per_nombre").innerHTML = miPersona.per_nombre;
document.getElementById("ocup0").innerHTML = miPersona.per_ocupacion[0];
document.getElementById("ocup1").innerHTML = miPersona.per_ocupacion[1];
document.getElementById("ocup2").innerHTML = miPersona.per_ocupacion[2];



