let name = "Junus";

console.log("Mein Name ist " + name + ".");

// Primitive Datentypen
// String, number, boolean
// ebenso: komplexe Datentypen:

let contact = {
  firstName: "Junus",
  lastName: "Ergin"
};
// damit mehr Struktur, geschweifte Klammern
// = Javascript Objekt

console.log(contact.firstName , contact.lastName);

let notebook = ["Eier kaufen" , "Milch kaufen"];
let newNote = prompt();
notebook.push(newNote);

console.log("Notiz 1 ist " + notebook[2]);

let result = celsius (prompt("Bitte geben sie eine Grad Celsius an"));

function celsius (x){
    return x * (9/5) +32;
}

console.clear();

function alter(age) {
    if(age=== 15){
    console.log ("Du darst den Führerschein machen")}
    if(age >= 16){
    console.log ("Du darst wählen und den Führerschein machen")}
    if(age >=18){
    console.log ("Du darst alles machen")}
    else {
        console.log ("Du darst gar nichts")
    }
}
alter (prompt("Wie alt bist du?"))
