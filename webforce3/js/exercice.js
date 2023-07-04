let plus = document.getElementById("plus");

let moins = document.getElementById("moins");

let mult = document.getElementById("mult");

let divise = document.getElementById("div");

let egal = document.getElementById("egal");

let operateur = "+";

plus.addEventListener("click", () => {
  operateur = "+";
});

moins.addEventListener("click", () => {
  operateur = "-";
});

mult.addEventListener("click", () => {
  operateur = "*";
});

divise.addEventListener("click", () => {
  operateur = "/";
});

egal.addEventListener("click", () => {
  let nombre1 = document.getElementById("nombre1").value;
  let nombre2 = document.getElementById("nombre2").value;
  let resultat = 0;
  if (operateur == "+") {
    resultat = Number(nombre1) + Number(nombre2);
    document.getElementById("resultat").value = resultat;
  } else if (operateur == "-") {
    resultat = Number(nombre1) - Number(nombre2);
    document.getElementById("resultat").value = resultat;
  } else if (operateur == "*") {
    resultat = Number(nombre1) * Number(nombre2);
    document.getElementById("resultat").value = resultat;
  } else if (operateur == "/") {
    resultat = Number(nombre1) / Number(nombre2);
    document.getElementById("resultat").value = resultat;
  }






















});

// // pour recuperer le bouton
// let btn = document.getElementById("add_todo");
// // pour recuperer le input
// let todo = document.getElementById("todo");
// // pour recuperer la div ou on va ajouter les todos
// let todoList = document.getElementById("todolist");

// // ecouter le click sur le bouton
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   // recuperer la valeur du input
//   let val = todo.value;
//   // creer un paragraphe
//   let p = document.createElement("p");
//   // ajouter le contenu du input dans le paragraphe
//   p.textContent = val;
//   // ajouter le paragraphe dans la div
//     todoList.appendChild(p);

//     p.addEventListener("click", () => {
//       p.style.color = "red";
//       p.style.fontSize = "22em";
//       if (p.style.color == "red") {
//         p.style.color == "blue";
//       } else {
//         p.style = "red";
//       }
//     });

// });



















