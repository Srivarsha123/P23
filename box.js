class Box{
    constructor(x, y, width, height){
      this.body = Bodies.rectangle(x,y,width,height)
      World.add(world, this.body)
      this.width = width;
      this.height = height;
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height)
        pop()
    }
}