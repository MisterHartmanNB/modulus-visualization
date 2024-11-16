let x,y;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Get the values from the input fields
  x = floor(document.getElementById("First").value);
  y = floor(document.getElementById("Second").value);

  //Reject y = 0
  if(y == 0){
    document.getElementById("result").innerHTML = "= Undefined";
    return;
  }

  // Calculate the scale
  let s = width/y;

  // If the scale is too big, calculate the scale based on the height
  let s2 = height/ceil(x/y);
  if(s>s2) s = s2;

  // Display the result
  document.getElementById("result").innerHTML = "= " + (x%y);

  background(255);

  //Draw rows of blocks for the division excluding the remainder
    for(let i = 0; i < floor(x/y); i++){
      for(let j = 0; j < y; j++){
        decideColor(j,y);
        square(j*s,height-s-i*s,s);
      }
    }

    //Draw the modulus as the top row of blocks
    for(let i = 0; i < x%y; i++){
      decideColor(i,x%y);
      square(i*s,height-floor(x/y)*s-s,s);
    }
}

function decideColor(x1,length) {
  //All numbers should be color coded

  //All blocks up to the nearest multiple of ten should be color coded based on the block of ten they are part of
  if(x1<floor(length/10)*10){
    //if(length=x%y) console.log("The modulus is being colored here");
    switch(floor(length/10)){
      case 0:
        fill('black');
        break;
      case 1:
        fill('white');
        break;
      case 2:
        fill('orange');
        break;
        case 3:
        fill('yellow');
        break;
        case 4:
        fill('green');
        break;
        case 5:
        fill('blue');
        break;
        case 6:
        fill('purple');
        break;
        case 7:
        fill('pink');
        break;
        case 8:
        fill('salmon');
        break;
        case 9:
        fill(220);
        break;
    }
    return;
  }

  //If the rows are longer than ten, all blocks greater than 10 should be color coded based on their modulus of 10
  switch(length%10){
    case 0:
      fill('white');
      break;
    case 1:
      fill('red');
      break;
    case 2:
      fill('orange');
      break;
      case 3:
      fill('yellow');
      break;
      case 4:
      fill('green');
      break;
      case 5:
      fill('blue');
      break;
      case 6:
      fill('purple');
      break;
      case 7:
      fill('pink');
      break;
      case 8:
      fill('salmon');
      break
      case 9:
      fill(220);
      break;
  }
}