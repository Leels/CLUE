import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import  { } from './suspect.js'
import  { } from './game.js'

$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();

    const character = $('input[name=character]:checked').val();

    playerSelectsCharachter(character);

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

  $('#makeAccusation').click(function() {
    let suspect = $('select#suspect').val();
    let weapon = $('select#weapon').val();
    let room = $('select#room').val();
    accusationFunction(suspect, weapon, room);
    if (winner) {
      "You win!"
    } else {
      "You lose!"
    }
  });

  $('#makeInquiry').click(function() {
    let suspect = $('select#suspect').val();
    let weapon = $('select#weapon').val();
    let room = $('select#room').val();
    inquireFunction(suspect, weapon, room);
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
      $("#someRoom").show(currentRoom);

      if (no suspect in room) {
        alert("There are no suspects in this room to ask for clues. Move onto a new room to continue.")
      } else {
        alert(suspect + "is in the " + room + ". Ask them a question to gather more clues.")
        }

});
});
