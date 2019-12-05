import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import  { Game } from './game.js';

$(document).ready(function() {
    $('#rules').hide();
    $('#player-clues').hide();
    $('#gameboard').hide();
    $('#accusation').hide();
    $('#inquiry').hide();
    $('#final').hide();

    $('form#initial-form').submit(e => {
        e.preventDefault();

        const playerCharacter = $('input[name=character]:checked').val();
        const game = new Game(playerCharacter);

        $('#intro-page').hide();
        $('#gameboard').show();
        doTurn(game, 0);
    });
});

function doTurn(game, i) {
    console.log(`${game.suspects[i].name} is taking their turn.`);

    const currentPlayer = game.suspects[i];
    const j = (game.suspects[i+1] ? i + 1 : 0);

    if (currentPlayer.isHuman) {
        displayRoom(currentPlayer.location);

        ruleCheck();
        relocation(currentPlayer);
        rumination(currentPlayer);
        inquisition(game, currentPlayer, j);
        accusation(game, currentPlayer, j);
    }
    else {
        doTurn(game, j);
    }
}

function ruleCheck() {
    $('#button-rules').click(() => {
        $('#gameboard').hide();
        $('#rules').show();
        backToGameboard();
    });
}

function relocation(currentPlayer) {
    $('#button-door').click(() => {
        currentPlayer.moveTo();
        displayRoom(currentPlayer.location);
    });
}


function rumination(currentPlayer) {
    $('#button-checkClues').click(() => {
        $('#gameboard').hide();
        $('#player-clues').show();
        const playerCardsHtml = currentPlayer.knowledge.map((know) => {
            const cardFileName = 'https://raw.githubusercontent.com/Leels/CLUE/master/assets/cards/' + know.replace(' ', '-').toLowerCase().concat(".jpg");
            return `
                <div class="display-card">
                    <img src="${cardFileName}">
                </div>
            `;
        });
        $('#player-clues-deck').html(playerCardsHtml);
        backToGameboard();
    });
}

function inquisition(game, currentPlayer, j) {
    $('#button-inquire').click(() => {
        $('#gameboard').hide();
        $('#inquiry').show();
        backToGameboard();

        $('#inquiry-form').submit(e => {
            e.preventDefault();

            const guess = [$('#suspect').val(), $('#location').val(), $('#weapon').val()];
            $('#murderer').val('');
            $('#murder-loc').val('');
            $('#murder-wep').val('');

            const result = currentPlayer.inquire(game.suspects[j], guess);
            alert(result);

            $('#inquiry').hide();
            $('#gameboard').show();
            $('#inquiry-form').reset();
            doTurn(game, j);
        });
    });
}

function accusation(game, currentPlayer) {
    $('#button-accuse').click(() => {
        $('#gameboard').hide();
        $('#accusation').show();
        backToGameboard();

        $('#accusation-form').submit(e => {
            e.preventDefault();

            const guess = [$('#murderer').val(), $('#murder-loc').val(), $('#murder-wep').val()];
            $('#murderer').val('');
            $('#murder-loc').val('');
            $('#murder-wep').val('');

            const gameOver = currentPlayer.accuse(game.caseFile, guess);
            if (gameOver) {
                $('#you-win-lose').append('You Win!');
                $('#game-outcome').append(`${guess[0]} killed Mr. Boddy with the ${guess[2].toLowerCase()} in the ${guess[1].toLowerCase()}.`);
            } else {
                $('#you-win-lose').append('You Loose!');
                $('#game-outcome').append(`You guessed ${guess[0]} killed Mr. Boddy with the ${guess[2].toLowerCase()} in the ${guess[1].toLowerCase()}...<br><br>BUT in fact, ${game.caseFile[0]} killed Mr. Boddy with the ${game.caseFile[2].toLowerCase()} in the ${game.caseFile[1].toLowerCase()}.`);
            }

            $('#accusation').hide();
            $('#final').show();
            $('#accusation-form').reset(); //showing error
        });
    });
}

function backToGameboard() {
    $('.button-backToGame').click(() => {
        $('#rules').hide();
        $('#player-clues').hide();
        $('#accusation').hide();
        $('#inquiry').hide();
        $('#gameboard').show();
    });
}

function displayRoom(room) {
    $('#room').removeClass().addClass(room.replace(' ', '-').toLowerCase());
    $('#room h2').text(room);
}
