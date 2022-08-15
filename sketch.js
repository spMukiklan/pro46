const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var trophyButton
var kabuto,machamp,rino1,scizor
var kabutoImg,marchampImg,scizorImg,rinoImg

function preload()
{
kabutoImg=loadImage('kabu.jpg')
marchampImg=loadImage('machamp.png')
rinoImg=loadImage('rino.png')
scizorImg=loadImage('scizor-f.png')
}

function setup() {
  createCanvas(1700,850);
  kabuto=createSprite(250,350,50,50)
  kabuto.addImage(kabutoImg) 

  marchamp=createSprite(700,350,50,50)
  marchamp.addImage(marchampImg) 

  rino1=createSprite(1000,350,25,25)
  rino1.addImage(rinoImg)
  rino1 . size(50,50)
  

  scizor=createSprite(1200,350,50,50)
  scizor.addImage(scizorImg) 
  
 trophyButton=createImg("trophy.png")
  trophyButton.position(10,10)
  trophyButton.size(50,50)

  trophyButton.mouseClicked(displayDetails)
}
function displayDetails(){

}
function draw() 
{
  background(51);
  
  
  drawSprites();

}

