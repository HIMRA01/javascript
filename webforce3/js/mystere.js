
        var randomNumber = Math.floor(Math.random() * 51);
        var attempts = 0;

        function checkGuess() {
            var guess = parseInt(document.getElementById('guessInput').value);
            if (attempts < 7){
                attempts++;

                   document.getElementById('attempts').textContent = attempts;
                if (guess === randomNumber) {
                    document.getElementById('message').textContent = 'Félicitations ! Vous avez deviné le chiffre.';
                    document.getElementById('result').textContent = 'Réponse : positive';
                    document.getElementById('nouveaujeu').disabled = false;
                    document.getElementById('solution').disabled = true;
                    document.getElementById('proposer').disabled = true;
                } else if (guess < randomNumber) {
                    document.getElementById('message').textContent = 'Essayez un chiffre plus grand.';
                    document.getElementById('result').textContent = '';
                } else {
                    document.getElementById('message').textContent = 'Essayez un chiffre plus petit.';
                    document.getElementById('result').textContent = '';
                }

            }
        }

        function playAgain() {
            randomNumber = Math.floor(Math.random() * 51);
            attempts = 0;
            document.getElementById('guessInput').value = '';
            document.getElementById('message').textContent = '';
            document.getElementById('result').textContent = '';
            document.getElementById('attempts').textContent = attempts;
            document.getElementById('nouveaujeu').disabled = true;
            document.getElementById('solution').disabled = false;
            document.getElementById('proposer').disabled = false;
        }

        function showSolution() {
            document.getElementById('message').textContent = 'La solution est ' + randomNumber + '.';
        }

        function giveHint() {
            var hint = randomNumber % 2 === 0 ? 'pair' : 'impair';
            document.getElementById('message').textContent = 'Le numéro est ' + hint + '.';
        }

        document.getElementById('nouveaujeu').addEventListener('click', playAgain);
        document.getElementById('solution').addEventListener('click', showSolution);
        document.getElementById('proposer').addEventListener('click', checkGuess);
        document.getElementById('guessInput').addEventListener('keyup', function (event) {
            if (event.key === 'Entrer') {
                checkGuess();
            }
        });
    
// var nouveaujeu = document.getElementById("jeu");
// var solution = document.getElementById("solution");
// var proposer = document.getElementById("propoer");












































    // <script>
    //     var secretNumber;
    //     var remainingGuesses;

    //     function newGame() {
    //         secretNumber = Math.floor(Math.random() * 100) + 1;
    //         remainingGuesses = 7;
    //         document.getElementById('message').innerHTML = '';
    //         document.getElementById('reponse').innerHTML = '';
    //     }

    //     function submitGuess() {
    //         var guess = parseInt(document.getElementById('guess').value);
    //         if (isNaN(guess) || guess < 1 || guess > 100) {
    //             alert('Veuillez entrer un nombre entre 1 et 100.');
    //             return;
    //         }

    //         remainingGuesses--;

    //         if (guess === secretNumber) {
    //             document.getElementById('message').innerHTML = 'Bonne réponse !';
    //             document.getElementById('reponse').innerHTML = '';
    //         } else if (remainingGuesses === 0) {
    //             document.getElementById('message').innerHTML = 'Vous avez épuisé tous vos essais.';
    //             document.getElementById('reponse').innerHTML = 'La solution était : ' + secretNumber;
    //         } else {
    //             var message = guess > secretNumber ? 'Trop grand !' : 'Trop petit !';
    //             document.getElementById('message').innerHTML = 'Essai #' + (7 - remainingGuesses) + ' : ' + message;
    //             document.getElementById('reponse').innerHTML += guess + ' - ';
    //         }
    //     }

    //     function showSolution() {
    //         document.getElementById('message').innerHTML = 'La solution était : ' + secretNumber;
    //     }

    //     // Démarrage d'une nouvelle partie au chargement de la page
    //     window.onload = newGame;
    // </scrip>
