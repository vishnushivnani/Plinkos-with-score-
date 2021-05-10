class Decoration{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/triangle3.png.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width*4, this.height*4);
        pop();
      }
}
class Triangle extends Decoration{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/triangle3.png.png");
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      Matter.Body.setAngle(this.body, angle);

      
    }
    display() {

      super.display();

      
      push();
      fill(this.color)
     // strokeWeight(30);
      stroke(this.color)
      textSize(30);
      text("PLINKO",250,50);
      pop();
      
    }
  }