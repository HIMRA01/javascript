let jour = prompt("Veuillez saisir un jour de la semaine :");

// Conversion du jour en minuscules pour faciliter la comparaison
jour = jour.toLowerCase();

let jourSuivant;

// Vérification du jour saisi et attribution du jour suivant
if (jour === "lundi") {
  jourSuivant = "mardi";
} else if (jour === "mardi") {
  jourSuivant = "mercredi";
} else if (jour === "mercredi") {
  jourSuivant = "jeudi";
} else if (jour === "jeudi") {
  jourSuivant = "vendredi";
} else if (jour === "vendredi") {
  jourSuivant = "samedi";
} else if (jour === "samedi") {
  jourSuivant = "dimanche";
} else if (jour === "dimanche") {
  jourSuivant = "lundi";
} else {
  // Gestion de l'erreur de saisie
  console.log("Jour incorrect !");
}

// Affichage du jour suivant ou de l'erreur
if (jourSuivant) {
  console.log("Le jour suivant est : " + jourSuivant);
  
}
document.write("Le jour suivant est : " + jourSuivant);

 premierNombre = parseFloat(prompt("Veuillez saisir le premier nombre :"));

// Demande à l'utilisateur de saisir le deuxième nombre
let deuxiemeNombre = parseFloat(prompt("Veuillez saisir le deuxième nombre :"));

// Comparaison des valeurs
if (premierNombre > deuxiemeNombre) {
  console.log(premierNombre + " est plus grand que " + deuxiemeNombre);
} else if (premierNombre < deuxiemeNombre) {
  console.log(premierNombre + " est plus petit que " + deuxiemeNombre);
} else {
  console.log(premierNombre + " est égal à " + deuxiemeNombre);
}


var nombre1 = (prompt("Saisissez le premier nombre :"));


var nombre2 = (prompt("Saisissez le deuxième nombre :"));

if (nombre1 < nombre2) {
  document.write(nombre1 + " est plus petit que " + nombre2);
}




else if (nombre1 > nombre2) {
  document.write(nombre1 + " est plus grand que " + nombre2);
}




// else {

//   document.write(nombre1 + " est égal à " + nombre2);

// }
