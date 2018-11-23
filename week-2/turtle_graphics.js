
// this chunk never happens:
// if(1 === 0) {

// 	  0 1 2 3 4         
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
		
		get getPosition(){
			return `${this.x},${this.y}`;
		}

		this.direction = 0;
		let track = [];					//need to store turtle track
	}
	
	forward(n){
		switch(this.direction) {
    case 90:
        this.y -= n;
        break;
    case 180:
        this.x -= n;
        break;
    case 270:
        this.y += n;
        break;

    default: // 0
        this.x += n;
	}
	
	right(){

	}
	
	left(){

	}

};

const flash = new Turtle(0,0);

console.log(flash.getPosition);
