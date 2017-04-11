var x = 300;
var y = 200;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
}

function draw(){
    lollipop(x,y);
}
 
 
function lollipop(x,y){
     //stick
    fill(255,2,150);
    rect(x-10,y,25,200);
    
     //candy
    fill(100,0,200);
    ellipse(x,y,100,100);
}

function stripes(){
 
}
