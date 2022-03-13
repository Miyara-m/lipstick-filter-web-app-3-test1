function preload()
{
    lipstick_mouth = loadImage('https://i.postimg.cc/jSny3gpz/cartoon-lipstick-mouth.png');
}
function setup(){
canvas = createCanvas(300,310);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(lipstick_mouth, mouthX, mouthY, 30, 30);
}
function takeSnaphot()
{
save('LipstickPhoto.png');
}
function modelLoaded()
{
    console.log('PoseNest Is Initialized');
}
function gotPoses(results)
{ 
if (results.length > 0) 
{
    console.log(results);
    console.log("mouth x = " + results[0].pose.mouth.x);
    console.log("mouth y = " + results[0].pose.mouse.y);
}
}