class Rectangl {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectanglWithText extends Rectangl {
    constructor(height, width, text, bgColor) {
        super(height, width); //всегда идет первой строчкой
        this.text = text;
        this.bgColor = bgColor;

    }
    showMyPops() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }

}

const div = new ColoredRectanglWithText(25, 10, 'Hello World', 'red');

div.showMyPops();
console.log(div.calcArea());