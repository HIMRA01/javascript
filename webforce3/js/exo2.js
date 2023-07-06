$("#dropdown").on("change", ()=> {
    if ($("#dropdown").val() == "1") {
      $("#message").text("bonjour");
    }
   else if ($("#dropdown").val() =="2") {
        $("#message").text("coucou");
    }

   else if($("#dropdown").val() =="3") {
        $("#message").text("bonsoir");
    }
   
    








});
    














// <form id="myForm" onsubmit="return validateForm()">
//   <input type="text" id="username" placeholder="Nom d'utilisateur">
//   <input type="password" id="password" placeholder="Mot de passe">
//   <input type="submit" value="Envoyer">
// </form>

// <p id="errorMessage" style="display: none; color: red;"></p>



// function validateForm() {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   if (username === "" || password === "") {
//     var errorMessage = document.getElementById("errorMessage");
//     $(#errorMessage).textContent = "Veuillez remplir tous les champs.";
//     errorMessage.style.display = "block";
//     return false;
//   }

//   // Le formulaire est valide, vous pouvez soumettre les données ou effectuer d'autres actions.
//   return true;
// }
















// <form id="myForm">
//   <input type="text" id="username" placeholder="Nom d'utilisateur">
//   <input type="password" id="password" placeholder="Mot de passe">
//   <input type="submit" value="Envoyer">
// </form>

// <p id="errorMessage" style="display: none; color: red;"></p>


// $(document).ready(function() {
//   $('#myForm').submit(function(event) {
//     event.preventDefault(); // Empêche l'envoi du formulaire par défaut

//     var username = $('#username').val();
//     var password = $('#password').val();

//     if (username === '' || password === '') {
//       $('#errorMessage').text('Veuillez remplir tous les champs.');
//       $('#errorMessage').show();
//     } else {
//       // Le formulaire est valide, vous pouvez soumettre les données ou effectuer d'autres actions.
//       // Ici, vous pouvez ajouter votre code pour envoyer le formulaire.
//     }
//   });
// });
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
