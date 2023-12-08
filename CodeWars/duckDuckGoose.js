// My answers
/* 
function duckDuckGoose(players, goose) {
  while (players.length < goose) {
    goose -= players.length;
  }
  return players[goose - 1].name;
}
*/

function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}
