// //*opgave 2
number = 5.3;
if (number < 5.5) {
  console.log;
}
("je hebt een onvoldoende");

// //*opgave 3

// number = 5;
if (number == 5) {
  console.log;
}
("je moet herkansen");

// //*opgave 4
const grade3 = 4;
if (grade3 > 5.4) {
  console.log("console.log");
} else {
  console.log("je hebt een onvoldoende");
}

//*opgave 5
let Wachtwoord = "superman30";
Wachtwoord = prompt("vul je wachtwoord in");
console.log(Wachtwoord + " u bent ingelogd");

//*opgave 6
const password = prompt("enter your Password");
if (password === "Superman30") {
  console.log("acces granted");
} else {
    console.log('acces denied')
}

// //*opgave 7
var persoon = prompt("Voer een persoon in (Docent, Student of Directeur):");

if (persoon === "Docent") {
  console.log("Jij bent een docent");
}
if (persoon === "Student") {
  console.log("je bent een student");
}
if (persoon == "Directeur");{
  console.log('je bent de directeur');
}

// //*opgave 8
('Currency exchange rates')
const exchangeRates = {
  MA: 10.66,
  US: 1.14,
  GB: 0.84,
  TRK: 15.55,
  ANG: 2.06,
};

const amountInEuro = parseFloat(prompt("Enter the amount in euros:"));
const countryCode = prompt(
  "Enter the country code Ma for Marocco, Us for United states GB for britain TRK for Turkey and ANG for Netherlands Antilles"
).toUpperCase();

if (exchangeRates.hasOwnProperty(countryCode)) {
  const exchangeRate = exchangeRates[countryCode];
  const amountInCurrency = amountInEuro * exchangeRate;
  console.log(
    `${amountInEuro} euros is equal to ${amountInCurrency} ${countryCode}`
  );
} else {
  console.log(
    "Invalid country code. Please try again with a valid country code."
  );
}

// //*opgave 9

const kleur = prompt(
  "Voer een kleur in (Blauw, Rood, Groen, Geel, Zwart):"
).toLowerCase();

switch (kleur) {
  case "blauw":
    console.log("Kleur is blauw");
    break;
  case "rood":
    console.log("Kleur is rood");
    break;
  case "groen":
    console.log("Kleur is groen");
    break;
  case "geel":
    console.log("Kleur is geel");
    break;
  case "zwart":
    console.log("Kleur is zwart");
    break;
  default:
    console.log("Deze kleur ken ik niet.");
}

//*opgave 10

const bedrag = parseFloat(prompt("Voer het bedrag in:"));

const btwTarief = prompt(
  "Voer het btw-tarief in (0%, 9%, 21%, geen):"
).toLowerCase();

let btwBedrag = 0;

switch (btwTarief) {
  case "0%":
    btwBedrag = 0;
    break;
  case "9%":
    btwBedrag = bedrag * 0.09;
    break;
  case "21%":
    btwBedrag = bedrag * 0.21;
    break;
  case "geen":
    btwBedrag = 0;
    break;
  default:
    console.log("Ongeldig btw-tarief.");
    break;
}

if (btwBedrag !== undefined) {
  console.log(`Het btw-bedrag is: ${btwBedrag.toFixed(2)} euro.`);
}
