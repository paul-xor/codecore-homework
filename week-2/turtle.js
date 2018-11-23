
// 	 🐢
//    0 1 2 3 4         
// 	0 o + + o +
// 	1 + + + + +
// 	2 + + + + +
// 	3 + + + x +
// 	4 + + + + +
// }


class Turtle {
	constructor(x,y){
		this.x = x;
		this.y = y;
    }
    get getPosition(){
        return `${this.x},${this.y}`;
    }
};

// setters for Turtle class x and y
Object.defineProperty(Turtle, 'x', {
    value: 0,
    writable: true
});

Object.defineProperty(Turtle, 'y', {
    value: 0,
    writable: true
});


//init Turtle in (0,0)
let flash = new Turtle(0,0);
console.log(flash.getPosition);

flash.x = 1;
flash.y = 2;
console.log(flash.getPosition);

