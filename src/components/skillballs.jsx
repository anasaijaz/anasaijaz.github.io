import { ReactP5Wrapper } from "@p5-wrapper/react";
import SPONSORS from "../images/skills/data";
import { useState } from "react";

const num = SPONSORS.length;
const circles = [];
const images = [];
const e = 0.5;

class Circle {
  constructor(pos, rad, p5, img) {
    this.pos = pos;
    this.vel = p5.createVector(0, 0);
    this.rad = rad;
    this.p5 = p5;
    this.img = img;
    this.col = p5.color(255);
    this.gravity = p5.createVector(0, 0.4);
    this.mass = p5.PI * rad * rad;
    this.phase = p5.random(0, p5.PI);
  }

  display() {
    this.img.resize(this.rad, 0);
    this.p5.push();
    // ALL THE OBJECT SPECIFIC THINGS GOES HERE
    this.p5.fill(this.col);
    this.p5.textSize(200);
    this.p5.textFont("outfit");
    this.p5.textAlign(this.p5.CENTER);
    this.p5.textStyle(this.p5.BOLD);
    this.p5.ellipse(this.pos.x, this.pos.y, this.rad * 2, this.rad * 2);
    this.p5.image(this.img, this.pos.x, this.pos.y);

    this.rotate();

    this.p5.pop();
  }

  move() {
    const limitVelocity = this.vel
      .copy()
      .setMag(this.p5.min(200, this.vel.mag()));
    this.pos.add(limitVelocity.mult(0.05));
  }

  rotate() {
    this.p5.translate(this.pos.x, this.pos.y);
  }

  update() {
    const mouse = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
    const center = this.pos;
    const rep = center.copy().sub(mouse).setMag(-0.2);
    this.vel.add(rep);
  }

  bounce(other) {
    // Change colors of both the circle

    const center = this.pos;
    const repel = center.copy().sub(other.pos).setMag(1);
    this.pos.add(repel);
    other.pos.sub(repel);

    this.vel.set(this.calculateV1(other));
    other.vel.set(this.calculateV2(other));
  }

  calculateV1(other) {
    const r1 = ((1 + e) * other.mass) / (this.mass + other.mass);
    const r2 = (this.mass - e * other.mass) / (this.mass + other.mass);
    const v1 = this.vel.copy();
    const v2 = other.vel.copy();
    return v1.mult(r2).add(v2.mult(r1));
  }

  calculateV2(other) {
    const r1 = ((1 + e) * this.mass) / (this.mass + other.mass);
    const r2 = (other.mass - e * this.mass) / (this.mass + other.mass);
    const v1 = this.vel.copy();
    const v2 = other.vel.copy();
    return v1.mult(r1).sub(v2.mult(r2));
  }

  changeColor() {
    this.col = this.p5.color("#000");
  }

  intersects(other) {
    let d = this.p5.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    return d <= this.rad + other.rad;
  }

  mouseClicked() {
    const mouse = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
    const center = this.pos;
    const rep = center.copy().sub(mouse).setMag(10);
    this.vel.add(rep);
  }

  mouseHover(cb) {
    const pos = this.pos;
    if (
      this.p5.dist(pos.x, pos.y, this.p5.mouseX, this.p5.mouseY) <= this.rad
    ) {
      this.col = this.p5.color("#fff");
    } else {
      this.col = this.p5.color("#000");
    }
  }

  checkBoundary() {
    const pos = this.pos;
    const rad = this.rad;
    const xmin = 0;
    const xmax = this.p5.width;
    const ymin = 0;
    const ymax = this.p5.height;

    if (pos.x > xmax - rad) {
      const force = this.p5.createVector(xmax, pos.y).sub(this.pos).mag();
      const dir = this.p5
        .createVector(xmax, pos.y)
        .sub(this.pos)
        .div(force)
        .mult(-2);
      this.pos.add(dir);
      this.pos.x = xmax - rad;
      this.vel.mult(-0.5);
    }
    if (pos.x < xmin + rad) {
      const force = this.p5.createVector(xmin, pos.y).sub(this.pos).mag();
      const dir = this.p5
        .createVector(xmin, pos.y)
        .sub(this.pos)
        .div(force)
        .mult(-2);
      this.pos.add(dir);
      this.pos.x = xmin + rad;
      this.vel.mult(-0.5);
    }
    if (pos.y > ymax - rad) {
      const force = this.p5.createVector(pos.x, ymax).sub(this.pos).mag();
      const dir = this.p5
        .createVector(pos.x, ymax)
        .sub(this.pos)
        .div(force)
        .mult(-2);
      this.pos.add(dir);
      this.pos.y = ymax - rad;
      this.vel.mult(-0.5);
    }
    if (pos.y < ymin + rad) {
      const force = this.p5.createVector(pos.x, ymin).sub(this.pos).mag();
      const dir = this.p5
        .createVector(pos.x, ymin)
        .sub(this.pos)
        .div(force)
        .mult(-2);
      this.pos.add(dir);
      this.pos.y = ymin + rad;
      this.vel.mult(-0.5);
    }
  }
}

function SkillBalls() {
  function sketch(p5) {
    p5.preload = () => {
      for (let i = 0; i < num; i++) {
        const img = p5.loadImage(SPONSORS[i].picture);
        images.push(img);
      }
    };

    p5.setup = () => {
      // A canvas based on full width of the container
      p5.createCanvas(p5.windowWidth / 1.2, 200);
      p5.imageMode(p5.CENTER);
      p5.strokeWeight(1);
      p5.stroke(p5.color("#fff"));

      // Trying to create random circles
      // Pushing once it satisfies the criterion
      const reductionFactor = p5.width > 768 ? 3 : 1;

      const maxCircleRad = p5.width / (SPONSORS.length * reductionFactor);

      while (circles.length < num) {
        const rad = p5.random(maxCircleRad / 2, 1.5 * maxCircleRad);
        const nextImage = images[circles.length];

        const xRandom = p5.random(rad, p5.width - rad);
        const yRandom = p5.random(rad, p5.width - rad);
        const pos = p5.createVector(xRandom, yRandom);

        const circle = new Circle(pos, rad, p5, nextImage);

        let isOverlapping = false;
        for (let j = 0; j < circles.length; j++) {
          let other = circles[j];
          if (circle.intersects(other)) {
            isOverlapping = true;
          }
        }

        if (!isOverlapping) {
          circles.push(circle);
        }
      }
    };

    p5.draw = () => {
      p5.background(0);

      for (let i = 0; i < circles.length; i++) {
        circles[i].display();

        // Check bounce of circles against each other
        for (let i = 0; i < circles.length; i++) {
          for (let j = 0; j < circles.length; j++) {
            if (i != j && circles[i].intersects(circles[j])) {
              circles[i].bounce(circles[j]);
            }
          }
        }

        // circles[i].checkBounce();
        circles[i].checkBoundary();
        circles[i].update();
        circles[i].mouseHover();
        circles[i].move();
      }
    };

    p5.mouseClicked = () => {
      for (let i = 0; i < num; i++) {
        circles[i].mouseClicked();
      }
    };
  }

  return (
    <div className="">
      <p className="text-sm font-medium  text-center">[Skills]</p>
      <div className=" my-10 w-fit border-[2px] rounded-[30px] overflow-hidden p-2 mx-auto border-gray-700">
        <ReactP5Wrapper sketch={sketch} />
      </div>
    </div>
  );
}

export default SkillBalls;
