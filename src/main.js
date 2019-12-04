import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './css/images/players';
import  { Game } from './game.js';

$(document).ready(function() {
    let game;
    $('#rules').hide();
    $('#player-clues').hide();
    $('#gameboard').hide();
    $('#accusation').hide();
    $('#final').hide();

    $('form#initial-form').submit(e => {
        e.preventDefault();

        const playerCharacter = $('input[name=character]:checked').val();
        game = new Game(playerCharacter);

        $('#intro').hide();
        $('#gameboard').show();
        console.log(game.caseFile);
        doTurn(game, 0);
    });
});

function doTurn(game, i) {
    console.log(i, game.suspects[i].name);
    const currentPlayer = game.suspects[i];
    const j = (game.suspects[i+1] ? i + 1 : 0);
    if (currentPlayer.isHuman) {
        ruleCheck(); //DONE
        // relocation(currentPlayer);
        rumination(currentPlayer);
        // inquisition(currentPlayer, j);
        accusation(game, currentPlayer, j);
    }
    else {
        doTurn(game, j);
        // setTimeout( () => {
        //     currentPlayer.moveTo();
        // }, 1000);
        // setTimeout( () => {
        //     currentPlayer.accuse();
        //     doTurn(j);
        // }, 2000);
    }
}

function ruleCheck() {
    $('#button-rules').click(() => {
        $('#gameboard').hide();
        $('#rules').show();
        backToGameboard();
    });
}

function backToGameboard() {
    $('.button-backToGame').click(() => {
        $('#rules').hide();
        $('#player-clues').hide();
        $('#accusation').hide();
        $('#gameboard').show();
    });
}

// function relocation(currentPlayer) {
//     $('#button-checkClues').click(() => {
//
//     });
//     //when clicked
//     //hide other divs
//     //show change room div
//     //when new room is clicked, run player.moveTo(newRoom);
//     //hide change room div
// }

function rumination(currentPlayer) {
    $('#button-checkClues').click(() => {
        $('#gameboard').hide();
        $('#player-clues').show();
        currentPlayer.knowledge.forEach((know, i) => {
            const cardName = know.replace(' ', '-').toLowerCase();
            $(`#card${i+1} img`).attr('src', 'https://raw.githubusercontent.com/Leels/CLUE/master/src/styles/images/cards/room-study.jpg');
        });
        backToGameboard();
    });
}

// function inquisition(currentPlayer, j) {
//     // $('button')
//     //change display when clicked
//     //take inputs
//     //run: player.inquire(game.suspects[j], [])
//     //show result
//     //when button clicked
//     //doTurn(j);
// }

function accusation(game, currentPlayer, j) {
    $('#button-accuse').click(() => {
        $('#gameboard').hide();
        $('#accusation').show();
        backToGameboard();
        $('#accusation-form').submit(e => {
            e.preventDefault();
            const guess = [$('#suspect').val(), $('#location').val(), $('#weapon').val()];
            const gameOver = currentPlayer.accuse(game.caseFile, guess);
            console.log(gameOver);
            if (gameOver) {
                $('#accusation').hide();
                $('#final').show();
            }
            else {
                $('#accusation').hide();
                $('#gameboard').show();
                doTurn(game, j);
            }
        });
    });
}
