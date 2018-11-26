
let track = [[2,3],[4,5]];

function test(track){

	let data = track.split(',');
	for (let point of track){
		let x = track.slice(0,-1);
		let y = track.slice(1);

		console.log(`value of x: ${x}, value of y: ${y}`);
	}
}

test();