var angle = Math.PI / 4;
var slider;
function setup(){
    createCanvas(800, 800);
    slider = createSlider(0, Math.PI * 2, Math.PI*2 - 0.2, 0.01);
    //slider.style('width', '80px');
}

function draw(){
    background(51);
    angle = slider.value();
    stroke(255);
    translate(width/2, height);
    branch(200);
    
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
      push();
      rotate(angle);
      branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.5);
    pop();
      
    push();
    rotate(-angle/5);
    branch(len * 0.5);
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}