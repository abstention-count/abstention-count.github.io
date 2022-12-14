p5.disableFriendlyErrors = true;
let tabela_01, radar_charts;

function preload() {
  tabela_01 = loadTable("tabela.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  addScreenPositionFunction();
  importData();
}

function draw() {
  background(220);
  drawData();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


