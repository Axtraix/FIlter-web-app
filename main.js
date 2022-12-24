nose_x=0;
nose_y=0;
difference=0;
rightwristx=0;
leftwristx=0;
function setup(){
    canvas= createCanvas(550,550);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(550, 550);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,550,550);
background("grey");
fill('#3434eb');
stroke('#3434eb');
square(nose_x,nose_y,difference);
}
function take_picture(){
    save("mypicture.png");
}
function preload(){
    img=loadImage("download.png");
}
function modelLoaded(){
    console.log("pose net is initialized");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
nose_x=results[0].pose.nose.x
nose_y=results[0].pose.nose.y
console.log("x="+nose_x, "y="+nose_y);
rightwristx=results[0].pose.rightWrist.x;
leftwristx=results[0].pose.leftWrist.x;
difference=Math.floor(leftwristx-rightwristx);
console.log("Right wrist x = "+rightwristx, "Left wrist x = "+leftwristx)
console.log("difference = "+ difference)

}
    else{
 console.log("error in initialization");
    }
}

