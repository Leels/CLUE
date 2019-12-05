// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import  { Game } from './game.js';
//
// $(document).ready(function() {
//     let game;
//     $('#rules').hide();
//     $('#player-clues').hide();
//     $('#gameboard').hide();
//     $('#accusation').hide();
//     $('#inquiry').hide();
//     $('#final').hide();
//
//     $('form#initial-form').submit(e => {
//         e.preventDefault();
//
//         const playerCharacter = $('input[name=character]:checked').val();
//         game = new Game(playerCharacter);
//
//         $('#intro').hide();
//         $('#gameboard').show();
//         console.log(game.caseFile);
//         doTurn(game, 0);
//     });
// });
//
// function doTurn(game, i) {
//     console.log(i, game.suspects[i].name);
//     const currentPlayer = game.suspects[i];
//     const j = (game.suspects[i+1] ? i + 1 : 0);
//     if (currentPlayer.isHuman) {
//         ruleCheck(); //DONE
//         // relocation(currentPlayer);
//         rumination(currentPlayer);
//         inquisition(game, currentPlayer, j);
//         accusation(game, currentPlayer, j);
//     }
//     else {
//         doTurn(game, j);
//         // setTimeout( () => {
//         //     currentPlayer.moveTo();
//         // }, 1000);
//         // setTimeout( () => {
//         //     currentPlayer.accuse();
//         //     doTurn(j);
//         // }, 2000);
//     }
// }
//
// function ruleCheck() {
//     $('#button-rules').click(() => {
//         $('#gameboard').hide();
//         $('#rules').show();
//         backToGameboard();
//     });
// }
//
// function backToGameboard() {
//     $('.button-backToGame').click(() => {
//         $('#rules').hide();
//         $('#player-clues').hide();
//         $('#accusation').hide();
//         $('#inquiry').hide();
//         $('#gameboard').show();
//     });
// }
//
// // function relocation(currentPlayer) {
// //     $('#button-checkClues').click(() => {
// //
// //     });
// //     //when clicked
// //     //hide other divs
// //     //show change room div
// //     //when new room is clicked, run player.moveTo(newRoom);
// //     //hide change room div
// // }
//
// function rumination(currentPlayer) {
//     $('#button-checkClues').click(() => {
//         $('#gameboard').hide();
//         $('#player-clues').show();
//         currentPlayer.knowledge.forEach((know, i) => {
//             const cardName = know.replace(' ', '-').toLowerCase();
//             $(`#card${i+1} img`).attr('src', 'https://raw.githubusercontent.com/Leels/CLUE/master/src/styles/images/cards/room-study.jpg');
//         });
//         backToGameboard();
//     });
// }
//
// function inquisition(game, currentPlayer, j) {
//     $('#button-inquire').click(() => {
//         $('#gameboard').hide();
//         $('#inquiry').show();
//         backToGameboard();
//
//         $('#inquiry-form').submit(e => {
//             e.preventDefault();
//
//             const guess = [$('#suspect').val(), $('#location').val(), $('#weapon').val()];
//             $('#murderer').val('');
//             $('#murder-loc').val('');
//             $('#murder-wep').val('');
//
//             const result = currentPlayer.inquire(game.suspects[j], guess);
//             alert(result);
//
//             $('#inquiry').hide();
//             $('#gameboard').show();
//             $('#inquiry-form').reset();
//             doTurn(game, j);
//         });
//     });
// }
//
// function accusation(game, currentPlayer, j) {
//     $('#button-accuse').click(() => {
//         $('#gameboard').hide();
//         $('#accusation').show();
//         backToGameboard();
//
//         $('#accusation-form').submit(e => {
//             e.preventDefault();
//
//             const guess = [$('#murderer').val(), $('#murder-loc').val(), $('#murder-wep').val()];
//             $('#murderer').val('');
//             $('#murder-loc').val('');
//             $('#murder-wep').val('');
//
//             const gameOver = currentPlayer.accuse(game.caseFile, guess);
//             alert(gameOver);
//
//             // $('#accusation-form').reset();
//             $('#accusation').hide();
//             $('#final').show();
//         });
//     });
// }
