
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

let pointsArr = [];
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
            switch(answer.trim()) {
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
            console.log("\x1b[33m","WRONG INPUT!","\x1b[0m");
            menu();
    };
    });
    
};

function view(){
    console.log("\x1b[33m",'\u2630 Your current list:',"\x1b[0m");
    listData();
    menu();
};

function listData(){
    pointsArr = createObjList(points);
    for (let point of pointsArr){
        let str = "";
        str = `${point.id} ${point.done? "[✓]" : "[ ]"} ${point.task}`;
        console.log(str);
    }
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

// function markPoint(number){
    
//     console.log(`${number}, typeof: ${typeof number}`);
//     console.log(`${pointsArr[number].id} - this debugging string, if 0 - false, 1 - true`);
//     pointsArr[number].id = true;
//     console.log(`${pointsArr[number].id} - this debugging string, if 0 - false, 1 - true`);
    
// };

function complete(){
    listData();
    rl.question("Mark completed '✓', please enter the number. \n >", answer => {
        
        if(answer.trim()){
            let marked = parseInt(answer);
            console.log(`${typeof marked} value: "\x1b[32m"${marked}"\x1b[0m"`);
            console.log(pointsArr[marked].done);
            
            pointsArr[marked].done = true;
            console.log(pointsArr[marked].done);
            console.log('Results ^^^^^^^^^^^^');
            console.log(pointsArr);
            
            // parseInt(marked);
            
            //listData();
            menu();
        }
    });
};

function deLete(){
    console.log('Delete selected');
};
function quit(){
    rl.close();
    console.log("\x1b[32m",'See you soon. 🖖🏽',"\x1b[0m");
};

const run = fullViewConsole();