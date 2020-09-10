class Plinko{

    constructor(x, y){
        var options={
            isStatic: true,
            restitution: 0.4
        }

        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        noStroke();
        fill(255);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();

    }

}