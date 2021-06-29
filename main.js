nose_x = 00;
nose_y = 00;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/Pxf3sgTg/46-467144-joker-mouth-hd-png-download.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x ;
        nose_y = results[0].pose.nose.y -10;
        console.log("nose x = " + nose_x);
        console.log("nose y = " + nose_y);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, nose_x, nose_y, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}