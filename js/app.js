const personas = [];

function mostrarPersonas() {
  console.log("Mostrar persona...");
  let texto = "";
  let idNumber = 0;


  for (let persona of personas) {
    console.log(persona);
    idNumber++;
    let newEle = document.createElement("ul");

    texto += `<li><div class="items" id='delPerson' >${idNumber} ${persona.nombre} ${persona.apellido} <i class="fa-solid fa-trash" id= 'trashIcon' onClick='deletePerson()'></i></div></li>`;
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

function deletePerson(){
  console.log("Hola Mundo");
  const itemss = document.getElementsByClassName("items");
  const persona = document.getElementById("personas");
  persona.remove(itemss);

}







