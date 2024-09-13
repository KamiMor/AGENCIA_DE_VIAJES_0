function calculateBricks() {
  const wallHeight = parseFloat(document.getElementById("wallHeight").value);
  const wallWidth = parseFloat(document.getElementById("wallWidth").value);
  const brickHeight = parseFloat(document.getElementById("brickHeight").value);
  const brickWidth = parseFloat(document.getElementById("brickWidth").value);

  if (
    wallHeight <= 0 ||
    wallWidth <= 0 ||
    brickHeight <= 0 ||
    brickWidth <= 0
  ) {
    alert("Por favor, ingrese valores positivos y mayores a cero.");
    return;
  }

  // Area of the wall
  const wallArea = wallHeight * wallWidth;
  // Area of one brick
  const brickArea = brickHeight * brickWidth;
  // Number of bricks needed
  const numberOfBricks = wallArea / brickArea;

  document.getElementById(
    "bricksResult"
  ).innerHTML = `Número de ladrillos necesarios: ${Math.ceil(numberOfBricks)}`;
}

function resetForm() {
  document.getElementById("bricksForm").reset();
  document.getElementById("bricksResult").innerHTML = "";
}
