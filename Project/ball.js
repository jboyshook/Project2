class ball {
    constructor(x, y) {
        var options = {
            isStatic: true,
            'restitution': 1.0,
            friction:0.6,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x, y, 20, options);
        this.image = loadImage("paper.png")

        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("green");
        image(this.image, 0, 0, this.height, this.width);
        pop();
    }
    keyPress() {
        if (keyDown("space")) {
            Matter.Body.setStatic(this.body, false);
        }
    }
}