//uzimanje svih formi sa stranice
const documentForms = document.forms;

//ispisivanje vrednosti inputa sa forme u alert box zajedno sa imenom odredjenog inputa
const printForm = (form) => {
  const formData = new FormData(form);
  //varijabla za kasnije proveravanje praznih polja
  let emptyFields = false;
  //pravljenje objekta od formDate
  const data = Object.fromEntries(formData.entries());
  //provera praznih polja
  for (const [key, value] of Object.entries(data)) {
    if (value === "") {
      emptyFields = true;
    }
  }
  //ako ima praznih polja, alert box sa porukom i prekid funkcije
  if (emptyFields) {
    alert("Please fill out all fields");
    return;
  }

  //ispisivanje vrednosti inputa sa forme u alert box zajedno sa imenom odredjenog inputa
  let message = "";
  // [key, value] koristi destructuring da bi se izvukle vrednosti
  // iz entry-a dobijenih iz Object.entries(data)
  for (const [key, value] of Object.entries(data)) {
    message += ` ${key}: ${value}\n`;
  }
  alert(message);
};

//prolazak kroz sve forme i dodavanje event listenera na submit
if (documentForms.length > 0) {
  for (let i = 0; i < documentForms.length; i++) {
    documentForms[i].addEventListener("submit", (e) => {
      e.preventDefault();
      printForm(e.target);
    });
  }
}
