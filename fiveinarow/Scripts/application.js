// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
    var firstPlayer = "Player 1";
    var secondPlayer = "Player 2";
    var view = new View.GameView(firstPlayer, secondPlayer);
    var gridSize = 10;
    var longestStrike = 5;

    new Control.GameController(gridSize, longestStrike, view, undefined, firstPlayer, secondPlayer);
});