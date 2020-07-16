class box{
 constructor(x,y,widtth,hight){
     var options = {
     restitution: 1.0,
     friction: 1.0,
     density: 1.0
     this.image = loadImage()
     } 
 }
 this.body = Bodies.rectangle(x,y,width,height,options);
 this.height = height;
 this.width = width;
 World.add(world,this.body);

display(){
rectMode(CENTER);
rect(x,y,this.width,this.height);
}