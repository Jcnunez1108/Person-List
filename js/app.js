const personas = [];

function mostrarPersonas() {
  console.log("Mostrar persona...");
  let texto = "";
  let idNumber = 0;


  for (let persona of personas) {
    console.log(persona);
    idNumber++;
    let newEle = document.createElement("ul");

    texto += `<li><div class="items">${idNumber} ${persona.nombre} ${persona.apellido} <i class="fa-solid fa-trash" id= 'trashIcon' onclick="deletePerson(${persona.id})"></i></div></li>`;
    newEle.innerHTML = texto;
  }

  document.getElementById("personas").innerHTML = texto;
  
}
const deletePerson = (id) => {
  console.log(id)
  let deleteId = personas.findIndex( (persona) => persona.id === id);
  personas.splice(deleteId, 1);
  mostrarPersonas();
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







