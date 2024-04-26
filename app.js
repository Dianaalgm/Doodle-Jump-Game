//Board------
let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight
    board.width = boardWidth
    context = board.getContext("2d"); //This is to be able to draw on the board
}