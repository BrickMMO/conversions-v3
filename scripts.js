// ==========================================================
// Element References
// ==========================================================
let stud = document.getElementById("stud");
let millimeter = document.getElementById("millimeter");
let centimeter = document.getElementById("centimeter");
let meter = document.getElementById("meter");
let inches = document.getElementById("inches");
let feet = document.getElementById("feet");
let stackedBricks = document.getElementById("stacked-bricks");
let stackedPlates = document.getElementById("stacked-plates");
let blocks16 = document.getElementById("blocks16");
let baseplates32 = document.getElementById("baseplates32");
let baseplates48 = document.getElementById("baseplates48");

// ==========================================================
// Function: performStudConversion()
// ==========================================================
function performStudConversion() {
  millimeter.value = Number(stud.value) * 8;
  centimeter.value = Number(stud.value) * 0.8;
  meter.value = Number(stud.value) * 0.008;
  inches.value = Number(stud.value) * 0.315;
  feet.value = Number(stud.value) * 0.026;
  stackedBricks.value = Number(stud.value) * 0.833;
  stackedPlates.value = Number(stud.value) * 2.499;
  blocks16.value = Number(stud.value) * 0.063;
  baseplates32.value = Number(stud.value) * 0.031;
  baseplates48.value = Number(stud.value) * 0.021;
}

// ==========================================================
// Function: performMillimeterConversion()
// ==========================================================
function performMillimeterConversion() {
  stud.value = Number(millimeter.value) * 0.125;
  centimeter.value = Number(millimeter.value) * 0.1;
  meter.value = Number(millimeter.value) * 0.001;
  inches.value = Number(millimeter.value) * 0.039;
  feet.value = Number(millimeter.value) * 0.003;
  stackedBricks.value = Number(millimeter.value) * 0.095;
  stackedPlates.value = Number(millimeter.value) * 0.285;
  blocks16.value = Number(millimeter.value) * 0.008;
  baseplates32.value = Number(millimeter.value) * 0.004;
  baseplates48.value = Number(millimeter.value) * 0.003;
}

// ==========================================================
// Function: performCentimeterConversion()
// ==========================================================
function performCentimeterConversion() {
  stud.value = Number(centimeter.value) * 1.25;
  millimeter.value = Number(centimeter.value) * 10;
  meter.value = Number(centimeter.value) * 0.01;
  inches.value = Number(centimeter.value) * 0.394;
  feet.value = Number(centimeter.value) * 0.033;
  stackedBricks.value = Number(centimeter.value) * 1.048;
  stackedPlates.value = Number(centimeter.value) * 3.144;
  blocks16.value = Number(centimeter.value) * 0.078;
  baseplates32.value = Number(centimeter.value) * 0.039;
  baseplates48.value = Number(centimeter.value) * 0.001;
}

// ==========================================================
// Function: performMeterConversion()
// ==========================================================
function performMeterConversion() {
  stud.value = Number(meter.value) * 125;
  millimeter.value = Number(meter.value) * 1000;
  centimeter.value = Number(meter.value) * 100;
  inches.value = Number(meter.value) * 39.37;
  feet.value = Number(meter.value) * 3.281;
  stackedBricks.value = Number(meter.value) * 104.167;
  stackedPlates.value = Number(meter.value) * 312.501;
  blocks16.value = Number(meter.value) * 6.25;
  baseplates32.value = Number(meter.value) * 3.906;
  baseplates48.value = Number(meter.value) * 0.04;
}

// ==========================================================
// Function: performInchesConversion()
// ==========================================================
function performInchesConversion() {
  stud.value = Number(inches.value) * 3.175;
  millimeter.value = Number(inches.value) * 25.4;
  centimeter.value = Number(inches.value) * 2.54;
  meter.value = Number(inches.value) * 0.025;
  feet.value = Number(inches.value) * 0.083;
  stackedBricks.value = Number(inches.value) * 2.646;
  stackedPlates.value = Number(inches.value) * 7.938;
  blocks16.value = Number(inches.value) * 0.198;
  baseplates32.value = Number(inches.value) * 0.099;
  baseplates48.value = Number(inches.value) * 0.001;
}

// ==========================================================
// Function: performFeetConversion()
// ==========================================================
function performFeetConversion() {
  stud.value = Number(feet.value) * 38.1;
  millimeter.value = Number(feet.value) * 304.8;
  centimeter.value = Number(feet.value) * 30.48;
  meter.value = Number(feet.value) * 0.305;
  inches.value = Number(feet.value) * 12;
  stackedBricks.value = Number(feet.value) * 31.75;
  stackedPlates.value = Number(feet.value) * 95.25;
  blocks16.value = Number(feet.value) * 2.25;
  baseplates32.value = Number(feet.value) * 1.191;
  baseplates48.value = Number(feet.value) * 0.03;
}

// ==========================================================
// Function: performStackedBricksConversion()
// ==========================================================
function performStackedBricksConversion() {
  stud.value = Number(stackedBricks.value) * 1.2;
  millimeter.value = Number(stackedBricks.value) * 9.6;
  centimeter.value = Number(stackedBricks.value) * 0.96;
  meter.value = Number(stackedBricks.value) * 0.01;
  inches.value = Number(stackedBricks.value) * 0.372;
  feet.value = Number(stackedBricks.value) * 0.031;
  stackedPlates.value = Number(stackedBricks.value) * 3;
  blocks16.value = Number(stackedBricks.value) * 0.0039;
  baseplates32.value = Number(stackedBricks.value) * 0.038;
  baseplates48.value = Number(stackedBricks.value) * 0.00043;
}

// ==========================================================
// Function: performStackedPlatesConversion()
// ==========================================================
function performStackedPlatesConversion() {
  stud.value = Number(stackedPlates.value) * 0.4;
  millimeter.value = Number(stackedPlates.value) * 3.2;
  centimeter.value = Number(stackedPlates.value) * 0.32;
  meter.value = Number(stackedPlates.value) * 0.003;
  inches.value = Number(stackedPlates.value) * 0.126;
  feet.value = Number(stackedPlates.value) * 0.01;
  stackedBricks.value = Number(stackedPlates.value) * 0.333;
  blocks16.value = Number(stackedPlates.value) * 0.004;
  baseplates32.value = Number(stackedPlates.value) * 0.013;
  baseplates48.value = Number(stackedPlates.value) * 0.000434;
}
