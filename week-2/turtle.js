
// 	 
//    0 1 2 3 4         
// 	0 🐢 + + o +
// 	1 + + + + +
// 	2 + + + o +
// 	3 + + + x +
// 	4 + + + + +
//


class Turtle {
	constructor(x,y){
		this.x = x;
        this.y = y;
        this.dir = 0;
        this.track = [];
        this.fieldRange = 5;
    }
    get getPosition(){
        let point = [];
        return point = [this.x,this.y];
    }
    get getDirection(){
        return `${this.dir}`;
    }
    forward(n){
        this.n = n;
        this.track.push(this.getPosition);
		switch(this.dir) {
            case 90:
            return this.y = rangeCheck(this.y , n, this.dir, this.fieldRange);
            break;
            case 180:
            return this.x = rangeCheck(this.x, n, this.dir, this.fieldRange);
            break;
            case 270:
            return this.y = rangeCheck(this.y, n, this.dir, this.fieldRange);
            break;
            
            default: // 0
            return this.x = rangeCheck(this.x, n, this.dir, this.fieldRange);
        }
    }

    right () {

        switch(this.dir) {
            case 0:
                this.dir = 270;
                break;
            case 90:
                this.dir = 0;
                break;
            case 180:
                this.dir = 90;
                break;
            case 270:
                this.dir = 180;
                break;
        }
    }

    left () {
        switch(this.dir) {
            case 0:
                this.dir = 90;
                break;
            case 90:
                this.dir = 180;
                break;
            case 180:
                this.dir = 270;
                break;
            case 270:
                this.dir = 0;
                break;
        }
    }

    allPoints() {
        //write last poin to track array
        this.track.push(this.getPosition);
        return this.track;
    }
    print(){
        const fieldToPrint = createField(this.fieldRange,this.track);
        // console.log(fieldToPrint);
        for (let i = 0; i < this.fieldRange + 1; i++){
            let str = '';
            for (let j = 0; j < this.fieldRange + 1; j++){
                str += fieldToPrint[i][j];
            }
            console.log(str + '\n');
        }
    }

};


function createField(fieldRange,track){

    let row = ['       '];
    let field = [];
    for (let i = 0; i < fieldRange; i++){
        row.push(i + '   ');
    }
    field.push(row); // 0 row - first element of field

    for(let j = 0; j < fieldRange; j++){
        row = [];
        for (let i = 0; i < fieldRange; i++){
            row.push('   +');
        }
        row.unshift('   ' + j);
        field.push(row); 
    }
    // populate field with points
    track.forEach(function(point){
        let x = parseInt(point.slice(0,-1)) + 1;
        let y = parseInt(point.slice(1)) + 1;
        field[y][x] = "   \u26F3";
    });
    return field;
}

function rangeCheck(start,next,dir,fieldRange){
    if (dir === 90 || dir === 180){
        return (0 <= start - next && start - next < fieldRange) ? start - next : 'Out Of Range!'
    }else{
        return (0 <= start + next && start + next < fieldRange) ? start + next : 'Out Of Range!'
    }
};


// variable setter x
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
Object.defineProperty(Turtle, 'track', {
    value: [],
    writable: true
});
// ----------< TEST >------------ //

//init Turtle in (0,0)
let flash = new Turtle(0,0);
console.log('Tutrtle was born. 🐢')

flash.forward(3);
console.log('Moved forward 3 to east');
console.log(`Tutrle current position is: ${flash.getPosition}`);

flash.right();
console.log('Turned right to south');

flash.forward(2);
console.log('Moved forward 2');
console.log(`Tutrle current position is: ${flash.getPosition}`);

flash.right();
console.log('Turned right to west');

flash.forward(3);
console.log('Moved forward 3');
console.log(`Tutrle current position is: ${flash.getPosition}`);

flash.left();
console.log('Turned left to south');

flash.forward(2);
console.log('Moved forward 2');
console.log(`Tutrle current position is: ${flash.getPosition}\n`);

console.log("===<<<Full turtle's path>>>===\n");
console.log(flash.allPoints());
console.log("\n");
console.log("===<<<   PRINT FIELD    >>>===\n");
flash.print();
