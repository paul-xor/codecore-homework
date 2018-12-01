
// { 
//     "id":"0", 
//     "exec":true, 
//     "task":null 
// }

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let = {}; // obj to store points
let points = [];


function oneLineConsole(){
    console.log();
    console.log('(v) View | (n) New | (cX) Complete | (dX) Delete | (q) Quit');
    console.log();
};

function fullViewConsole(){
    console.log("Welcome to Todo CLI");
    console.log("-------------------");
    menu();
};


function menu(){
    
    oneLineConsole();
    rl.setPrompt("> ");
    rl.prompt();

    rl.question('', answer =>{
            switch(answer) {
        case 'v':
            view();
            break;
        case 'n':
            add();
            break;
        case 'cX':
            complete();
            break;
        case 'dX':
            deLete();
            break;
        case 'q':
            quit();
            break;
        default:
            console.log("Wrong input!");
            menu();
    };
    });
    
};

function view(){
    console.log('Your current list:');
    
    pointsArr = createObjList(points);
    console.log(pointsArr);
    console.log(pointsArr.length);
    console.log('\n');
    for (let point of pointsArr){
        let str = "";
        str = point.id + " " + point.done + " " + point.task;
        console.log(str);
    }
    menu();
};

function createObjList(array) {
    let updated = [];
    for (let i = 0; i < array.length; i ++) {
        const id = i;
        const task = array[i];
        const done = false;
      updated.push({ id, task, done });
    }
    return updated;
  }

function collectData(data){
    if(data){
        points.push(data); 
    }; 
};

function add(){
    console.log('Enter your point(s):');
    rl.question('>',answer => {
        if(answer.trim()){
            collectData(answer);
            menu();
        }
    });
    
};

function complete(){
    console.log('complete selected');
};

function deLete(){
    console.log('Delete selected');
};
function quit(){
    rl.close();
    console.log('See you soon. 🖖🏽');
};

const run = fullViewConsole();