import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import  { Game } from './game.js';

//make display service part of game
function doTurn(i) {
    const currentPlayer = game.suspects[i];
    const j = (game.suspects[i+1] ? i + 1 : 0);
    if (currentPlayer.isHuman) {
        relocation(currentPlayer);
        rumination(currentPlayer);
        inquisition(currentPlayer, j);
        accusation(currentPlayer);
    }
    else {
        setTimeout( () => {
            currentPlayer.moveTo();
        }, 1000);
        setTimeout( () => {
            currentPlayer.inquire();
            doTurn(j);
        }, 2000);
    }
}


relocation(player) {
    //show button to change room
    //when clicked
        //hide other divs
        //show change room div
        //when new room is clicked, run player.moveTo(newRoom);
        //hide change room div
}
rumination(player) {
    //show button to check check knowledge
    //when clicked
        //hide other divs
        //show player knowledge (change img src attrs)
        //when exit clicked, hide this, display main div
}
inquisition(player, j) {
    //show inquiry button
    //change display when clicked
        //take inputs
        //run: player.inquire(game.suspects[j], [])
        //show result
        //when button clicked
            //doTurn(j);
}
accusation(player, j) {
    //show accuse button
    //change display when clicked
        //take inputs
        //run: player.accuse(game.caseFile, [])
        //display win/loss, if loss then
            //doTurn(j);
}





$(document).ready(function() {
    let game;

    $("form#game").submit(function(event) {
        event.preventDefault();
        const character = $('input[name=character]:checked').val();
        game = new Game(character);



        $("#intro-page").hide();
        $("#clues").show();

        $('.toGameboard').click(function() {
            $("#clues").hide();
            $("#rules").hide();
            $("#gameboard").show();
        });

        $('#toClues').click(function() {
            $("#gameboard").hide();
            $("#clues").show();
        });

        $('#toRules').click(function() {
            $("#gameboard").hide();
            $("#rules").show();
        });

        $('#makeInquiry').click(function() {
            let suspect = $('select#suspect').val();
            let weapon = $('select#weapon').val();
            let room = $('select#room').val();
        });

        $('#door').click(function() {
            let currentRoom = $('#door').val();
            $("#library").hide();
            $("#study").hide();
            $("#lounge").hide();
            $("#billiard-room").hide();
            $("#kitchen").hide();
            $("#dining-room").hide();
            $("#conservarory").hide();
            $("#hall").hide();
            $("#ballroom").hide();
            $("#room").show(currentRoom);

            if (no suspect in room) {
                $("#entry-statement").text("There are no suspects in this room to ask for clues. Move onto a new room to continue.")
            } else {
                $("#entry-statement").text(suspect + "is in the " + room + ". Ask them a question to gather more clues.")
            }
        });

        $('#makeAccusation').click(function() {
            let suspect = $('select#suspect').val();
            let weapon = $('select#weapon').val();
            let room = $('select#room').val();
            accuse(suspect, weapon, room);
            if (winner) {
                $("#final-result").show("You win!")
            } else {
                $("#final-result").show("You lose!")
            }
        });
    });
});
