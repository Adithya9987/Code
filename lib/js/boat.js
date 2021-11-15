class Boat{
 
    constructor(x,y,width,height,boatPos){
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    this.boatPos=boatPos
    var options={
        restitution:0.8,
        friction:1,
        density:1,
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("assets/boat.png");
    World.add(world,this.body)
    }

 display(){
  var pos=this.body.position
  push();
  translate(pos.x,pos.y);
  imageMode(CENTER);
  image(this.image,0,this.boatPos,this.width,this.height);
  pop();
 }
 remove(index){
     setTimeout(()=>{
        Matter.World.remove(world,boats[index].body)
        delete boats[index]
     },2000)
         
     
    
 }
}
