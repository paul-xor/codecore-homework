
// this chunk never happens:
// if(1 === 0) {

// 	  0 1 2 3 4         
// 	0 o + + o +
// 	1 + + + + +
// 	2 + + + + +
// 	3 + + + x +
// 	4 + + + + +
// }
	

let log = console.log();

class Turtle {
	constructor(x,y){
		this.x = x;
		this.y = y;
		
		let north,west,south = false;
		let east = true;
		let track = [];					//need to store turtle track
	}
	
	forward(n){
		if(Turtle.north){
			this.y -= n;
		}else if(Turtle.east){
			this.x += n;
		}else if(Turtle.west){
			this.x -= n;
		}else if(Turtle.south){
			this.y += n;
		}
	}
	
	right(){

	}
	
	left(){

	}

};

const flash = new Turtle(0,0).forward(2);
log(flash.constructor.toString());


