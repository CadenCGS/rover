// Rover Object Goes Here
// ======================
  let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travellog: []
  };
// ======================

function createBoard(columns, rows) {
	var matrix = [];
	for (var i = 0; i < columns; i++) {
		matrix[i] = new Array(rows);
	}
	return matrix;
}

var board = createBoard(10, 10);
console.log(board);

function turnLeft(){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    }
    rover.travellog.push('Rover turned left and is now facing ' + rover.direction);
}

function turnRight(){
  console.log("turnRight was called!");
  switch (rover.direction) {
  case "N":
    rover.direction = "E";
    break;
  case "E":
    rover.direction = "S";
    break;
  case "S":
    rover.direction = "W";
    break;
  case "W":
    rover.direction = "N";
    break;
  }
  rover.travellog.push('Rover turned right and is now facing ' + rover.direction);
}

function moveForward(){
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
      rover.y--;
      onTheGrid()
      break;
    case "E":
      rover.x++;
      onTheGrid()
      break;
    case "S":
      rover.y++;
      onTheGrid()
      break;
    case "W":
      rover.x--;
      onTheGrid()
      break;
    }
    rover.travellog.push('Rover moved forward and is now at ' + rover.x + ', ' + rover.y);
}

function moveBackward(){
  console.log("moveBackward was called")
  switch (rover.direction) {
    case "N":
      rover.y++;
      onTheGrid()
      break;
    case "E":
      rover.x--;
      onTheGrid()
      break;
    case "S":
      rover.y--;
      onTheGrid()
      break;
    case "W":
      rover.x++;
      onTheGrid()
      break;
    }
    rover.travellog.push('Rover moved backward and is now at ' + rover.x + ', ' + rover.y);
}

function onTheGrid(){
  if (rover.x > 10){
    rover.x--;
  }

  if (rover.x < -10){
    rover.x++;
  }

  if (rover.y > 10){
    rover.y--;
  }

  if (rover.y < -10){
    rover.y++;
  }
  rover.travellog.push('Rover tried to move ' + rover.direction + ' and was stopped by the boundary at ' + rover.x + ', ' + rover.y);
}

let roverRoute = String("rffrfflfrff");

function multiCommand(roverRoute){
  for (i = 0; i < 10; i++){
    if (roverRoute[i] == "r"){
      turnRight();
    }

    else if (roverRoute[i] == "l"){
      turnLeft();
    }

    else if (roverRoute[i] == "f"){
      moveForward();
    }

    else if (roverRoute[i] == "b"){
      moveBackward();
    }

    else if (roverRoute[i] != "r" || roverRoute[i] != "l" || roverRoute[i] != "f" || roverRoute[i] != "b"){
      null;
    }
  }
}