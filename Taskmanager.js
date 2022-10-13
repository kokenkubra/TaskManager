// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
const prompt = require('prompt-sync')();

let tasks = ["study", "journal", "cooking"]

console.log('Welcome to your task manager, Press: ');
console.log('1. to see all your tasks');
console.log('2. to add a task');
console.log('3. to delete a task');
console.log('4. to mark a task as done');
console.log('5. to Exit the task manager');
rl.question('k', (tasknum) => {
        if (tasknum == 1){
            showtasks();
        }
        if(tasknum == 2)
        {
            addToList();
        }
        if(tasknum == 3){
            removeFromlist();
        }
    rl.close();
});
    
const showtasks = () => {
    console.log(tasks)
}
const addToList = () => {
    var p = prompt("Witch task would like to add ");
    tasks.push(p);
    console.log("you added " + p);
    console.log(tasks);
}

const removeFromlist = () => {
    
    var p = prompt("Witch task would like to delete ");
    for( var i = tasks.length-1; i--;){
    if ( tasks[i] === p){
         tasks.splice(i, 1);
    }
    console.log(tasks);
    }
}
