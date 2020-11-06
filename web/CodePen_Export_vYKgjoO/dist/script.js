var image=null;
var image1=null;
var imgcanvas;
var imgcanvas2;
var fileinput

function upload(){
  imgcanvas=document.getElementById("can");
  fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}

function check() {
    if (image == null  || ! image.complete()) {
    alert("Image not loaded");
  }
  else{
    image1=new SimpleImage(image);
  }
}

function makeGray() {
  check()
  for (var pixel of image1.values()) {
  var avg =(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  
  imgcanvas2=document.getElementById("can2");
  image1.drawTo(imgcanvas2); 
}

function makeNeg() {
  check()
  for (var pixel of image1.values()) {
  
    pixel.setRed(255-pixel.getRed());
    pixel.setGreen(255-pixel.getGreen());
    pixel.setBlue(255-pixel.getBlue());
  }
  
  imgcanvas2=document.getElementById("can2");
  image1.drawTo(imgcanvas2); 
}

function makeRed() {
  check()
  for (var pixel of image1.values()) {
  var avg =(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }

  }
  
  imgcanvas2=document.getElementById("can2");
  image1.drawTo(imgcanvas2); 
}

function makeyellow() {
  check()
  for (var pixel of image1.values()) {
    var avg =(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if ( avg< 128 ){
      pixel.setRed(2 * avg);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    }
      else {
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
      }

  }
  
  imgcanvas2=document.getElementById("can2");
  image1.drawTo(imgcanvas2); 
}

function makeblue(){
  check();
  for (var pixel of image1.values()) {
  pixel.setBlue(255);
  }
  image1.drawTo(imgcanvas2); 
}

function makeRainbow(){
  check();
  for(var rbPix of image1.values()){
     var avg3 = (rbPix.getRed() + rbPix.getGreen() + rbPix.getBlue()) / 3;
    if(rbPix.getY() < image1.getHeight() * 1/7){
     // rbPix.setRed(255);
    if ( avg3 < 128 ){
      rbPix.setRed(2 * avg3);
      rbPix.setGreen(0);
      rbPix.setBlue(0);
    }
      else {
      rbPix.setRed(255);
      rbPix.setGreen(2 * avg3 - 255);
      rbPix.setBlue(2 * avg3 - 255);
      }
    }
    
   else if (rbPix.getY() < image1.getHeight() * 2/7 ) {
     if ( avg3 < 128 ){
      rbPix.setRed(2 * avg3);
      rbPix.setGreen(0.8 * avg3);
      rbPix.setBlue(0);
    }
      else {
      rbPix.setRed(255);
      rbPix.setGreen(1.2 * avg3 - 51);
      rbPix.setBlue(2 * avg3 - 255);
      }
     }
    
    else if (rbPix.getY() < image1.getHeight() * 3/7) {
     if ( avg3 < 128 ){
      rbPix.setRed(2 * avg3);
      rbPix.setGreen(2 * avg3);
      rbPix.setBlue(0);
    }
      else {
      rbPix.setRed(255);
      rbPix.setGreen(255);
      rbPix.setBlue(2 * avg3 - 255);
      }
     }
    
    else if (rbPix.getY() < image1.getHeight() * 4/7) {
       if ( avg3 < 128 ){
      rbPix.setRed(0);
      rbPix.setGreen(2 * avg3);
      rbPix.setBlue(0);
    }
      else {
      rbPix.setRed(2 * avg3 - 255);
      rbPix.setGreen(255);
      rbPix.setBlue(2 * avg3 - 255);
      }
     }
    
    else if (rbPix.getY() < image1.getHeight() * 5/7) {
       if ( avg3 < 128 ){
      rbPix.setRed(0);
      rbPix.setGreen(0);
      rbPix.setBlue(2 * avg3);
    }
      else {
      rbPix.setRed(2 * avg3 - 255);
      rbPix.setGreen(2 * avg3 - 255);
      rbPix.setBlue(255);
      }
     }
    
    else if (rbPix.getY() < image1.getHeight() * 6/7) {
      if ( avg3 < 128 ){
      rbPix.setRed(0.8 * avg3);
      rbPix.setGreen(0);
      rbPix.setBlue(2 * avg3);
    }
      else {
      rbPix.setRed(1.2 * avg3 - 51);
      rbPix.setGreen(2 * avg3 - 255);
      rbPix.setBlue(255);
      }
    
     }
    
    else{
       if ( avg3 < 128 ){
      rbPix.setRed(1.6 * avg3);
      rbPix.setGreen(0);
      rbPix.setBlue(1.6 * avg3);
    }
      else {
      rbPix.setRed(0.4 * avg3 + 153);
      rbPix.setGreen(2 * avg3 - 255);
      rbPix.setBlue(0.4 * avg3 + 153);
      }
    }
   
  }
   image1.drawTo(imgcanvas2);
}

function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}

function reset(){
  check();
  image1.drawTo(imgcanvas2);
}

function clearCanvas() {
  doClear(imgcanvas);
  doClear(imgcanvas2);
}