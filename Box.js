class Box{
constructor(x,y){
var options  = {
    restitution:1,
    density:1,
    friction:0.5
}
this.bodies = Bodies.rectangle(x,y,70,70,options);
this.width = 70;
this.height = 70;

World.add(world, this.bodies)

}



display(){
var pos = this.bodies.position
var angle = this.bodies.angle
push()
strokeWeight(5)
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
fill(255)
stroke("blue")
rect(0,0,this.width,this.height)
pop()
}
}