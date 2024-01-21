import { ReactP5Wrapper } from "@p5-wrapper/react";

class Square {
  constructor(p5, x, y, side, color) {
    this.x = x;
    this.y = y;
    this.side = side;
    this.p5 = p5;
    this.color = [255, 255, 255];
    this._defaultcolor = this.p5.color("#ddd");
    this.lasthovered = 0;
  }

  update() {
    this.hover();
  }

  hover() {
    if (
      this.p5.mouseX > this.x &&
      this.p5.mouseX < this.x + this.side &&
      this.p5.mouseY > this.y &&
      this.p5.mouseY < this.y + this.side
    ) {
      this.lasthovered = this.p5.frameCount;
      this.changeColor();
    } else {
      this.fadeColor();
    }
  }

  // Start fading color from t = 0
  fadeColor() {
    const red = this.color[0];
    const green = this.color[1];
    const blue = this.color[2];

    this.color = [red + 10, green, blue + 10];
  }

  changeColor() {
    this.color = [0, 255, 0];
  }

  display() {
    this.p5.push();
    this.p5.fill(
      this.p5.color(`${this.color[0]}`, `${this.color[1]}`, `${this.color[2]}`)
    );
    this.p5.rect(this.x, this.y, this.side, this.side);
    this.p5.pop();
  }
}

const Squares = [];

function Checkers() {
  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth / 1, p5.windowHeight * 1.8);
      const screenwidth = p5.width;
      const screenheight = p5.height;
      const squareWidth = screenwidth * 0.1;
      const squareHeight = squareWidth;

      const iSquares = p5.floor(screenwidth / squareWidth);
      const jSquares = p5.floor(screenheight / squareWidth);

      for (let i = 0; i < iSquares; i++) {
        for (let j = 0; j < jSquares; j++) {
          const color = p5.color("#fffff");
          const square = new Square(
            p5,
            i * squareWidth,
            j * squareHeight,
            squareWidth,
            squareHeight,
            color
          );
          Squares.push(square);
          square.display();
        }
      }
    };

    p5.draw = () => {
      for (let i = 0; i < Squares.length; i++) {
        const square = Squares[i];
        square.display();
        square.update();
      }
    };
  };

  return (
    <div className="absolute w-full h-full left-0 top-0 -z-10">
      <ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>
    </div>
  );
}

export default Checkers;
