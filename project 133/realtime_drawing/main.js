function setup() {
    video = createCapture(VIDEO);
    video.size(500,550);

    canvas = createCanvas(500,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background('#030bfc')
}

function modelLoaded () {
    console.log('PoseNet is Initialized!')
}

function gotPoses(results) 
{
    if(results.legnth > 0);
    {
        console.log(results)
    }
}