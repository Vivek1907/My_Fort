class Rectangle{
    constructor(x,y,width,height,angle){
      var options = {
        'isStatic' : true,
      }
      this.body = Bodies.rectangle(x,y,width,height,angle,options);
      this.width = width;
      this.height = height;
      this.body.angle = angle;
    }
    display(color){
      fill(color);
      noStroke();
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      rectMode(CENTER);
    }
}