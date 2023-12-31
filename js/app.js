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
  console.log(id);
  let deleteId = personArr.findIndex((person) => person.id === id);
  personArr.splice(deleteId, 1);
  showPerson();
};

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
    custom_alert("Success");
  } else {
    // alert("They have no information");
    // console.log("Passed");
    // let alertMess = document.getElementById("alertMessage");
    // alertMess.innerHTML = "they have no information";
    // setTimeout(() => {
    //   alertMess.style.display = "none";
    // }, 3000);

    custom_alert("They have no information");
  }
}

function custom_alert(alert_message) {
  /* You can utilize the web page address
   * for the alert message by doing the following:

   const ALERT_TITLE = "The page at " + document.location.href + " says: ";
   */
  const ALERT_TITLE = "Alert Message";
  const ALERT_BUTTON_TEXT = "OK";

  // Check if there is an HTML element with
  // an ID of "alert_container".If true, abort
  // the creation of the custom alert.
  let is_alert_container_exist = document.getElementById("alert_container");
  if (is_alert_container_exist) {
    return;
  }

  // Create a div to serve as the alert
  // container. Afterward, attach it to the body
  // element.
  let get_body_element = document.querySelector("body");
  let div_for_alert_container = document.createElement("div");
  let alert_container = get_body_element.appendChild(div_for_alert_container);

  // Add an HTML ID and a class name for the
  // alert container
  alert_container.id = "alert_container";
  alert_container.className = "alert_container";

  // Create the div for the alert_box and attach
  // it to the alert container.
  let div_for_alert_box = document.createElement("div");
  let alert_box = alert_container.appendChild(div_for_alert_box);
  alert_box.className = "alert_box";

  // Set the position of the alert box using
  // scrollTop, scrollWidth, and offsetWidth
  alert_box.style.top = document.documentElement.scrollTop + "px";
  alert_box.style.left =
    (document.documentElement.scrollWidth - alert_box.offsetWidth) / 2 + "px";

  // Create h1 to hold the alert title
  let alert_header_tag = document.createElement("h1");
  let alert_title_text = document.createTextNode(ALERT_TITLE);
  let alert_title = alert_box.appendChild(alert_header_tag);
  alert_title.appendChild(alert_title_text);

  // Create a paragraph element to hold the
  // alert message
  let alert_paragraph_tag = document.createElement("p");
  let alert_message_container = alert_box.appendChild(alert_paragraph_tag);
  alert_message_container.textContent = alert_message;

  // Create the OK button
  let ok_button_tag = document.createElement("button");
  let ok_button_text = document.createTextNode(ALERT_BUTTON_TEXT);
  let ok_button = alert_box.appendChild(ok_button_tag);
  ok_button.className = "close_btn";
  ok_button.appendChild(ok_button_text);

  // Add an event listener that'll close the
  // custom alert
  ok_button.addEventListener(
    "click",
    function () {
      remove_custom_alert();
    },
    false
  );
}

function remove_custom_alert() {
  let HTML_body = document.querySelector("body");
  let alert_container = document.getElementById("alert_container");
  HTML_body.removeChild(alert_container);
}
