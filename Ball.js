class Ball{
    constructor(x,y,r){
    var options  = {
        restitution:1,
        density:1,
        friction:0.5
    }
    this.bodies = Bodies.circle(x,y,r,options);
    this.r = r
    World.add(world, this.bodies)
    
    }
    
    
    
    display(){
    var pos = this.bodies.position
    var angle = this.bodies.angle
    push()
    strokeWeight(5)
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
    fill(255)
    stroke("blue")
    ellipse(0,0,this.r,this.r) 
pop()
    }
    }