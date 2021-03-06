// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
    var firstPlayer = "Player 1";
    var secondPlayer = "Player 2";
    
    var gridSize = 3;
    var longestStrike = 3;

    var view = new View.GameView(gridSize, firstPlayer, secondPlayer);

    new Control.GameController(gridSize, longestStrike, view, undefined, firstPlayer, secondPlayer);
});
