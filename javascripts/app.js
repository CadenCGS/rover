// Rover Object Goes Here
// ======================
  let rover = {
    direction: "N",
    x: 0,
    y: 0
  };
// ======================
function turnLeft(){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("The rover is now facing " + rover.direction);
      break;
    case "W":
      rover.direction = "W";
      console.log("The rover is now facing " + rover.direction);
      break;
    case "S":
      rover.direction = "E";
      console.log("The rover is now facing " + rover.direction);
      break;
    case "E":
      rover.direction = "N";
      console.log("The rover is now facing " + rover.direction);
      break;
    }
}

function turnRight(){
  console.log("turnRight was called!");
  switch (rover.direction) {
  case "N":
    rover.direction = "E";
    console.log("The rover is now facing " + rover.direction);
    break;
  case "E":
    rover.direction = "S";
    console.log("The rover is now facing " + rover.direction);
    break;
  case "S":
    rover.direction = "W";
    console.log("The rover is now facing " + rover.direction);
    break;
  case "W":
    rover.direction = "N";
    console.log("The rover is now facing " + rover.direction);
    break;
  }
}

function moveForward(){
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
      console.log("The rover's was at " + rover.x + ", " + rover.y);
      rover.y--;
      console.log("The rover's is now " + rover.x + ", " + rover.y);
      break;
    case "E":
      console.log("The rover's was at " + rover.x + ", " + rover.y);
      rover.x++;
      console.log("The rover's is now " + rover.x + ", " + rover.y);
      break;
    case "S":
      console.log("The rover's was at " + rover.x + ", " + rover.y);
      rover.y++;
      console.log("The rover's is now " + rover.x + ", " + rover.y);
      break;
    case "W":
      console.log("The rover's was at " + rover.x + ", " + rover.y);
      rover.x--;
      console.log("The rover's is now " + rover.x + ", " + rover.y);
      break;
    }
}

let roverRoute = String("rffrfflfrff");

function multiCommand(roverRoute){
  for (i = 0; i < 10; i++){
    if (roverRoute[i] == "r"){
      turnRight();
    }

    if (roverRoute[i] == "l"){
      turnLeft();
    }

    if (roverRoute[i] == "f"){
      moveForward();
    }
  }
}