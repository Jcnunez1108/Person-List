const personArr = [];

function showPerson() {
  let text = "";
  let idNumber = 0;


  for (let person of personArr) {
    console.log(person);
    idNumber++;
    let newEle = document.createElement("ul");

    text += `<li><div class="items">${idNumber} ${person.name} ${person.lastName} <i class="fa-solid fa-trash" id= 'trashIcon' onclick="deletePerson(${person.id})"></i></div></li>`;
    newEle.innerHTML = text;
  }

  document.getElementById("personP").innerHTML = text;
  
}
const deletePerson = (id) => {
  console.log(id)
  let deleteId = personArr.findIndex( (person) => person.id === id);
  personArr.splice(deleteId, 1);
  showPerson();
}

function addPerson() {
  const form = document.forms["form"];
  const name = form["name"];
  const lastName = form["lastName"];

  if (name.value != "" && lastName.value != "") {
    const person = new PersonP(name.value, lastName.value);
    
    console.log(person);
    personArr.push(person); 
    showPerson();
    form.reset();

  } else {
    console.log("they have no information");
    document.getElementById("alertMessage").innerHTML = "they have no information";
  }

}



