class Slingshot{
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    length:100,
    stiffness:0.5
    } 
     this.Sling= Constraint .create(options);
     World.add(world,this.Sling);
     this.pointB=pointB; 
    }
    fly(){
this.Sling.bodyA=null;

    }
    display(){
        if (this.Sling.bodyA){
var posA=this.Sling.bodyA.position;
var  posB=this.pointB;
strokeWeight(8);} 
        //line(posA.x,posA.y,posB.x,posB.y);
    }
}
  