/*************************EXERCICE1 ************************************/

// Écrire un programme informatique en Javascript qui calcule le volume d’un parallélépipède rectangle.
// On rappelle que la formule pour calculer le volume est: Volume = largeur x longueur x hauteur.pour y arriver:
// 1.il faut déclarer 3 variables(largeur, longueur et hauteur) et les initialiser avec des valeurs numériques
// 2.déclarer une variable volume et l’initialiser à 0
// 3.Appliquer la formule puis affecter son résultat à la variable volume
// 4.afficher le résultat sur la console

// var largueur = 8;
// var longeur = 5;
// var hauteur = 5;
// var volume = 0;
// volume = largueur * longeur * hauteur
// console.log(volume)

//  / **********************************FIN EXERCICE 1 *******************************/

// ******************************** EXERCICE 2************************************

// exo :
// soit la variable age
// ecrire un programme qui permet:
// 1 d'afficher bébé si age inferieur a 5
// 2 d'afficher enfant si age est compris entre 5 et 10
// 3 d'afficher ado si age est compris entre 11 et 18
// 4 d'afficher vieux si age age est strictement superieur a 18

// let age = 2;

// if (age < 5) {

//     console.log("bébé")
// }

// if ((age >= 5) && (age <= 10)){

//     console.log("enfant")
//   }

// if ((age >= 11) && (age <= 18)) {

// console.log("ado")

//   }

// if (age > 18) {

//  console.log("vieux")

//  }

/*******************************FIN EXERCICE 2****************************************************** */

// nombre = 0;

// switch (nombre) {
//   case 0:
//     console.log("dimanche");
//     break;
//   case 1:
//     console.log("lundi");
//     break;
//   case 2:
//     console.log("mardi");
//     break;
//   case 3:
//     console.log("mercredi");
//     break;
//   case 4:
//     console.log("jeudi");
//     break;
//   case 5:
//     console.log("vendredi");
//     break;
//   case 6:
//     console.log("samedi");
//     break;

// }

// ********************************************************* exercice*********************************************

//  Exercice
// soit le tableau: ["bannane", "pomme", "mangue"]
// ajouter une fraise entre pomme et mangue
// supprimer la bannane
// remplacer fraise et mangue par goyave

// let tableau = ["bannane", "pomme", "", "mangue"];
// console.log(tableau);
// tableau[2]= "fraise" ;
// console.log(tableau);
// tableau.shift();
// console.log(tableau);
// tableau.fill("goyave")
// console.log(tableau)


/*******************************FIN EXERCICE ****************************************************** */




// **************************************  EXERCICE ***************************************************************

// function maxMin(a, b, c = true) {
//   if (c == true && a > b) {

//     return a;

//   }
//   else if (c == false && a > b) {

//     return b;

//   }
//   else if (c == true && a < b) {

//     return b;

//   }
//   else if (c == false && a < b) {
//     return a;
//   }
// }

// let r = maxMin(2,5, false)
// console.log(r)


/*******************************FIN EXERCICE ****************************************************** */


// **************************************  EXERCICE ***************************************************************


var tab = [1,6,9]
function sommetab(tableau) {
  let tab = 0;
  for (var i = 0; i < tableau.length; i++){
    
tab = tab+ tableau[i]


  }
  return tab;
}

var resultat = sommetab(tab);
console.log(resultat);