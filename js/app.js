const personas = [];

function mostrarPersonas() {
  console.log("Mostrar persona...");
  let texto = "";

  for (let persona of personas) {
    console.log(persona);
    let newEle = document.createElement("ul");

    // texto += `${persona.nombre} ${persona.apellido} <i class="fa-solid fa-trash"></i></li>`;

    texto += `<li><div class="items" id='deletePerson' >${persona.nombre} ${persona.apellido} <i class="fa-solid fa-trash" id= 'trashIcon' onClick='deletePerson()'></i></div></li>`;
    newEle.innerHTML = texto;
  }

  document.getElementById("personas").innerHTML = texto;
  
}

function agregarPersona() {
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];

  if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona(nombre.value, apellido.value);

    console.log(persona);
    personas.push(persona); 
    mostrarPersonas();
  } else {
    console.log("No tiene informacion");
    document.getElementById("mensajeRror").innerHTML = "No tiene informacion";
  }

}

document.getElementById("trashIcon").addEventListener('click', deletePerson);

function deletePerson(evento){
  console.log("Hola Mundo");
}







