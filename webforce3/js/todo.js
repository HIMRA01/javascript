// // pour recuperer le bouton
// let btn = document.getElementById("add_todo"); 
// // pour recuperer le input
// let todo = document.getElementById('todo'); 
// // pour recuperer la div ou on va ajouter les todos
// let todoList = document.getElementById("todolist"); 

// // ecouter le click sur le bouton
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // recuperer la valeur du input
//     let val = todo.value;
//     // creer un paragraphe
//     let p = document.createElement("p");
//     // ajouter le contenu du input dans le paragraphe
//     p.textContent = val;
//     // ajouter le paragraphe dans la div
//     todoList.appendChild(p);

//     p.addEventListener('click', () => {
        
//         p.style.color = "red"; 
//         p.style.fontSize = "22em"
//         if (p.style.color == "red") {
            
//             (p.style.color == "blue")
//         } else {
//             p.style = "red";
//         }
            













//     });




// });












// pour récupérer le bouton
let btn = $("#add_todo");
// pour récupérer le input
let todo = $("#todo");
// pour récupérer la div où on va ajouter les todos
let todoList = $("#todolist");

// écouter le click sur le bouton
btn.on('click', (e) => {
    e.preventDefault();
    // récupérer la valeur du input
    let val = todo.val();
    // créer un paragraphe
    let p = $("<p></p>");
    // ajouter le contenu du input dans le paragraphe
    p.text(val);
    // ajouter le paragraphe dans la div
    todoList.append(p);
});

