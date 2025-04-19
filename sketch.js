let number= 1;
let f = 1.9;
let t = "Hola Mundo"
let gate = true;
let myArray = ['deeppink', 'darkorchid', 'magenta'];
let img;
let mySound;

// Load the image.
function preload() {
    img = loadImage('/image/Tora4.jpg');
    soundFormats('wav',);
    mySound = loadSound('/sound/respiración calma.wav');
  }


function setup() {
    createCanvas(800, 640);
  }
  
  function draw() {
    background(255,204,0);
  
    if (keyIsPressed === true) {
        if (key === 'w') {
          print("visualizar una imagen");
            // Draw the image.
            image(img, mouseX, mouseY, 200,200);
        } else if (key === 's') {
            print("visualizar una circulo");
            circle(mouseX, mouseY, 200);
        } else if (key === 'a') {
            print("escuchar un clip de audio");
            mySound.play();
        } else if (key === 'd') {
            print("visualizar una texto");
            // Use HSB color.
            //colorMode(HSB);
            fill(255, 0, 0);
            textSize(50);
            text(t, mouseX, mouseY);
        }
    }
  }