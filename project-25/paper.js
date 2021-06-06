class Paper {
    constructor(x , y , radius) {
        var options = {
            'restitution':0.8,
            'friction':2.0,
            'density':1.0
        }
        this.body = Bodies.circle(x , y , radius , options);
        this.radius = radius;
        this.image = loadImage("Images/paper.png")
        World.add(world , this.body);
    }

    display() {
        var pos = this.body.position ;
        imageMode(CENTER);
        image(this.image , pos.x , pos.y , this.radius , this.radius)
    }
}
