var angle = Math.PI / 4;
var slider;
function setup(){
    canvas = createCanvas(800, 800);
    
    slider = createSlider(0, Math.PI * 2, Math.PI*2 - 0.2, 0.005);
    slider2 = createSlider(0, 10, 1, 0.5);
    slider3 = createSlider(2, 5, 3, 1);
    inverse = createSlider(0, 1, 0, 1);
    bLength = createSlider(-0.9,0.01, 0, 0.001);
    
    slider.style('width', '80px');
    slider2.style('width', '80px');
    slider3.style('width', '40px');
    bLength.style('width', '80px');
    inverse.style('width', '20px');
    
    slider.position(20, 20);
    slider2.position(20, 80);
    slider3.position(130, 20);
    bLength.position(20, 50);
    inverse.position(130, 50);
}


function draw(){
    background(51);
    var branches = slider3.value();
    var c = slider2.value();
    angle = slider.value(); 
    
    if(inverse.value() === 0){
        stroke(0); 
    }
    if(inverse.value() ===1){
        stroke(255);
    }
    
    translate(width/2, height);
    
    branch(200, c, branches);  
}

function branch(len, c, branches) {
    line(0, 0, 0, -len);
    translate(0, -len);
    
    if(slider2.value() > 0){
        if(inverse.value() === 0){
            stroke(0 + (15*c)); 
        }
        if(inverse.value() ===1){
            stroke(255 - (15*c)); 
        }
          
        c+=1;
    }
     
    if(len > 4 && branches === 2){
        push();
        rotate(angle);
        branch(len * (0.7+bLength.value()), c, branches);
        
        pop();
        
        push();
        rotate(-angle);
        branch(len * (0.7+bLength.value()), c, branches);
        pop();  
        
    }
    
    if (len > 4 && branches === 3) {
        push();
        rotate(angle);
        branch(len * (0.67+bLength.value()), c, branches);
        pop();
        
        push();
        rotate(-angle);
        branch(len * (0.5+bLength.value()), c, branches);
        pop();  
        
        push();
        rotate(-angle/5);
        branch(len * (0.5+bLength.value()), c, branches);
        pop();
    }
    
    if(len > 4 && branches === 4){
        push();
        rotate(angle);
        branch(len * (0.5+bLength.value()), c, branches);
        pop();
        
        push();
        rotate(-angle);
        branch(len * (0.5+bLength.value()), c, branches);
        pop();  
        
        push();
        rotate(-angle/5);
        branch(len * (0.5+bLength.value()), c, branches);
        pop();
        
        push();
        rotate(angle/5);
        branch(len * (0.5+bLength.value()), c, branches);
        pop();
        
    }
    
    //note this tree doesn't have 5 branches, however It looks very nice at
    //min and max angle values
    if(len > 4 && branches === 5){
        push();
        rotate(angle);
        branch(len * (0.57+bLength.value()), c, branches);
        pop();
        
        push();
        rotate(-angle);
        branch(len * (0.57+bLength.value()), c, branches);
        pop();  
        
        push();
        rotate(1);
        branch(len * (0.4+bLength.value()), c, branches);
        pop();
        
        push();
        rotate(-1);
        branch(len * (0.4+bLength.value()), c, branches);
        pop();     
    }

    
}
