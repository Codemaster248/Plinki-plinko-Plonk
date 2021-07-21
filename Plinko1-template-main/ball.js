//class Particle{
  //constructor(){
    //  var options={
        //restitution:'1.0',
        //density:'1.0',
        //friction:'1.0'
    //  }
    //  this.body=Bodies.rectangle(20,20,this.r,options);
   //   this.color=color(random(0,255),random(0,255),random(0,255));
   //   World.add(world,this.body)
   // }
   // display(){
    //    var pos = this.body.position;
    //    var angle = this.body.angle;
    //    if(frameCount%60===0){
    //      particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    //    }
    //    push();
    //    translate(pos.x, pos.y);
   //     rotate(angle);
   //     imageMode(CENTER);
  //      noStroke();
   //     fill(this.color);
 //       ellipseMode(RADIUS);
 //       ellipse(0,0,this.r,this.r);
//        pop();
//        var pos = this.body.position;
    //    rectMode(CENTER);
      //  fill(this.color);
    //    rect(pos.x, pos.y, this.w, this.h);
   // }
//}

class Particle {
  constructor(x, y) {
      var options = {
          restitution: 1,
          friction: 0.1,
          isStatic:false
      }
      this.r = 10;
      this.body = Bodies.circle(x, y, this.r, options);
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
  }
  display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      noStroke();
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
  }

};