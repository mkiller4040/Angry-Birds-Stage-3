class ConstraintBody 
{
  constructor(bodyA,bodyB)
  {
    var options = 
    {
      bodyA : bodyA,
      bodyB : bodyB,
      stiffness : 0.04,
      lenght : 10
    }

    this.constraintBody = Constraint.create(options);
    World.add(world,this.constraintBody);
  }

  display()
  {
    var pointA = this.constraintBody.bodyA.position;
    var pointB = this.constraintBody.bodyB.position;

    strokeWeight(3);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
}