
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
    console.log('\x1b[34m(v) View | (n) New | (cX) Complete | (dX) Delete | (q) Quit \x1b[0m');
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
    console.log("# ID Box  Tasks: ")
    listData();
    menu();
};

function listData(){

    if(pointsArr.length === 0){
        pointsArr = createObjList(points);
    }else{
        let tempArr1 = [];
        let tempArr2 = [];
        tempArr1 = pointsArr;
        tempArr2 = createObjList(points);
        pointsArr = [];
        pointsArr = tempArr1.concat(tempArr2);
        
        let j = tempArr1.length;
        for (let i = j; i < pointsArr.length; i++){
            pointsArr[i].id = i;
        }
    }

    for (let point of pointsArr){
        let str = "";
        str = `> ${point.id}  ${point.done? "[\x1b[32m✓\x1b[0m]" : "[ ]"} ${point.task}`;
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
    points = [];
    return updated;
  }


function add(){
    console.log('Enter your point(s):');
    rl.question('>',answer => {
        if(answer.trim()){
            points.push(answer); 
            menu();
        }
    });
    
};

function complete(){
    listData();
    rl.question("Mark completed '✓', please enter the number. \n >", answer => {
        
        if(answer.trim()){
            if (answer.length > 2){
                console.log("WRONG INPUT or operation is not supported.");
                menu();
            }else{
                let marked = parseInt(answer);
                pointsArr[marked].done = true;
                listData();
                menu();
            }
        }
    });
};

function deLete(){
    listData();
    rl.question("Enter the number to DELETE task from the list. \n >", answer => {
        
        if(answer.trim()){
            let marked = parseInt(answer);
            let toDelete = pointsArr.splice([marked],1);
            console.log(`Following task to "\x1b[37m"DELETE"\x1b[0m": ${[toDelete]}`);

            listData();
            menu();
        }
    });
};

function quit(){
    rl.close();
    console.log("\x1b[32m",'See you soon. 🖖🏽',"\x1b[0m");
};

const run = fullViewConsole();