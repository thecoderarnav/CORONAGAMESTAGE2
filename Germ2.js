class Germ2 extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/germ2.jpg");
    
  }
  display(){
    //console.log(this.body.speed);
   if(this.body.speed < 3){
   super.display();
    }
    else{
      World.remove(world, this.body);
     // push();
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
 //pop();
    }
   }
    score(){
     if (this.Visiblity < 0 && this.Visiblity > -1005){
       score++;
     }
   }
 }

