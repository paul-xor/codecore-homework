
// 	 
//    0 1 2 3 4         
// 	0 🐢 + + o +
// 	1 + + + + +
// 	2 + + + + +
// 	3 + + + x +
// 	4 + + + + +
// }


class Turtle {
	constructor(x,y){
		this.x = x;
        this.y = y;
        this.dir = 0;
    }
    get getPosition(){
        return `${this.x},${this.y}`;
    }
    get getDirection(){
        return `${this.dir}`;
    }
    forward(n){
        this.n = n;
        
		switch(this.dir) {
            case 90:
            return this.y = rangeCheckMinus(this.y,n);
            break;
            case 180:
            return this.x = rangeCheckMinus(this.x,n);
            break;
            case 270:
            return this.y = rangeCheckPlus(this.y,n);
            break;

            default: // 0
            return this.x = rangeCheckPlus(this.x,n);
        }
	}

};

let fieldRange = 5;
function rangeCheckPlus (start,next){
    return (0 <= start + next && start + next < fieldRange) ? start + next : 'Out Of Range!'
}

function rangeCheckMinus (start,next){
    return (0 <= start - next && start - next < fieldRange) ? start - next : 'Out Of Range!'
}

// Recommended approach for variable setter x
Object.defineProperty(Turtle, 'x', {
    value: 0,
    writable: true
});
//variable setter y
Object.defineProperty(Turtle, 'y', {
    value: 0,
    writable: true
});
// variable setter dir
Object.defineProperty(Turtle, 'dir', {
    value: 0,
    writable: true
});

// ----------< TEST >------------ //

//init Turtle in (0,0)
let flash = new Turtle(0,0);
flash.forward(3);
console.log(flash.getPosition);
flash.dir = 270;
flash.forward(3);
console.log(flash.getPosition);

// flash.x = 1;
// flash.y = 2;
// console.log(flash.getPosition);
// console.log(flash.getDirection);


