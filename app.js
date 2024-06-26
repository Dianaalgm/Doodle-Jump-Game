//Board------
let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

//Doodler-----
let doodlerWidth = 46 ;
let doodlerHeight = 46;
let doodlerX = boardWidth/2 - doodlerWidth/2 ;
let doodlerY = boardHeight*7/8 - doodlerHeight ;
let doodlerRightImg;
let doodlerLeftImg;

let doodler = {
    img:null,
    x: doodlerX,
    y: doodlerY,
    width: doodlerWidth,
    height: doodlerHeight
}


window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight
    board.width = boardWidth
    context = board.getContext("2d"); //This is to be able to draw on the board

    //This is to draw the doodler on the canvas
    context.fillStyle = "green" ;
    context.fillRect(doodler.x,doodler.y,doodler.width,doodler.height);

    //load the doodle image
    doodlerRightImg = new Image();
    doodlerRightImg.src = "./images/doodler-right.png";
    doodler.img = doodlerRightImg


}