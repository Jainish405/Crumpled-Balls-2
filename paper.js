class Paper{
    constructor(x,y){
var options = {
    isStatic : false,
    friction : 0.5,
    restitution : 0.3,
    density : 1.2

}
this.body = Bodies.circle(x,y,10,options);
this.image=loadImage("paper.png")
World.add(world,this.body);
    }
     display() {
         var pos = this.body.position;
        imageMode(RADIUS);
        fill("white");
        image(this.image,pos.x,pos.y,10,10);
    
      }
}