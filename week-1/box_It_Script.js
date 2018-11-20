function drawLine(num) {
    let line = "";
    if(num > 0) {
        for (let i = 0; i < num; i++){
            line += "\u2501";
        }
    }
    return line;
} 

function drawTopBorder(num){
    let start_coner = '\u250f';
    let end_coner = '\u2513';
    return line = start_coner + drawLine(num) + end_coner;
}

function drawMiddleBorder(num){
    let start_coner = '\u2523';
    let end_coner = '\u252b';
    return line = start_coner + drawLine(num) + end_coner;
}

function drawBottomBorder (num){
    let start_coner = '\u2517';
    let end_coner = '\u251b';
    return line = start_coner + drawLine(num) + end_coner;
}

function drawBarsAround(str){
    let vertical_bar = '\u2503';
    return line = vertical_bar + str + vertical_bar;
}

/** lineAddSpace returns complete string with boarders for 'small' strings
 * like -> |John Snow         |
 *         |Daenerys Targaryen|
 */
const lineAddSpace = (str,num) => {
    for (let i = 0; i < num; i++)
        str += " ";
    return drawBarsAround(str);
};


function boxIt (array){
    let biggestLength = 0;
    let whiteSpace = 0;
    let result = [];

    // to adjust side boarders it's required to find biggest record in array
    for (let element of array){
        if (element.length > biggestLength){
            biggestLength = element.length;
        }
    }
    // ! how about max function for arrays?

    // to populate 'result' array, but without top & bottom border lines
    for (let element of array){
        if (element.length < biggestLength){
            whiteSpace = biggestLength - element.length;
            result.push(lineAddSpace(element,whiteSpace));
            result.push(drawMiddleBorder(biggestLength));
        }else{
            result.push(drawBarsAround(element));
            result.push(drawMiddleBorder(biggestLength));
        }
    }
    //delete last middle boarder
    result.pop();
    // add top & bottom border lines
    result.unshift(drawTopBorder(biggestLength));
    result.push(drawBottomBorder(biggestLength));
    
    // to print result
    for(let element of result){
        console.log(element);
    }
}

// D O E S N ' T  W O R K  Y E T.
let userInput = [];
for(let i = 2; i < process.argv.length; i++){
    userInput.push(process.argv[i]);
    //console.log (userInput);
};
console.log(boxIt(userInput));

// --------- T E S T ------------

// console.log(drawLine(20));
// console.log(drawTopBorder(20));
// console.log(drawMiddleBorder(20));
// console.log(drawBottomBorder(20));
// console.log(drawBarsAround('My name is Pavel:)'));
// console.log(boxIt(['Jon Snow','Daenerys Targaryen','Cersei Lannister','Tyrion Lannister','Sansa Stark',
// 'Robert Baratheon', 'Theon Greyjoy','Khal Drogo']));