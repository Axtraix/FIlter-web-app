function setup(){
canvas=createCanvas(300,300)
canvas.center()
}

function draw(){
image(img,0,0,300,300)
}
function take_picture(){
    save("mypicture.png")
}
function preload(){
    img=loadImage("download.png")
}