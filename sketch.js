const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg();

}

function draw(){

    // add condition to check if any background image is there to add
    if (bg != undefined) {

        background(backgroundImg);

    }

    Engine.update(engine);

    // write code to display time in correct format here
    if (hour <= 12) {

        fill("black");
        text(hour + " AM", 100, 100);

    }

    else if (hour >= 12) {

        fill("white");
        text(hour - 12 + " PM", 100, 100);

    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    hour = datetime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    if (hour>= 04 && hour <= 06) {

        bg = "sunrise1.png";

    }

    else if (hour>= 06 && hour <= 08) {

        bg = "sunrise2.png";

    }

    else if (hour>= 23 && hour == 0) {

        bg = "sunset10.png";

    }

    else if (hour== 0 && hour <= 03) {

        bg = "sunset11.png";

    }

    else {

        bg = "sunset12.png";

    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
