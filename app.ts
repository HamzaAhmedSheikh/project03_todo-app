#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";

import addTodo from "./src/addTodo.js";
import listTodos from "./src/listTodos.js";
import updateTodo from "./src/updateTodo.js";
import deleteTodo from "./src/deleteTodo.js";
import markTodos from "./src/markTodo.js";

export interface Todo {    
    name: string;
    completed: boolean;
}

export let todos: Todo[] = [];

let sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    })
}

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        `
              Welcome to the TODO-APP \n        
        `
    );
    await sleep();
    rainbowTitle.stop();


    console.log(gradient.pastel.multiline(figlet.textSync("TODO-APP", { horizontalLayout: 'full' })))



    console.log('\n');
    console.log(
        `
         ${chalk.cyan.bold(`Welcome to our Todo App`)}                   
         ${chalk.hex('#FFA500').bold(`In our Todo App, you can create a to-do list, update the to-do list`)} 
         ${chalk.hex('#FFA500').bold(`get all to-do lists, and mark a to-do.`)}                
        `
    );
}

await welcome()


async function main() {
    console.log('Welcome to our todo app!');
  
    while (true) {
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What do you want to do?',
          choices: [
            'Add a todo',
            'View all todos',
            'Mark a todo',
            'Update a todo',
            'Delete a todo',
            'Quit',
          ],
        },
      ]);
  
      if (answers.action === 'Add a todo') {
          await addTodo()        
      } else if (answers.action === 'View all todos') {
        await listTodos()    
      } else if (answers.action === 'Mark a todo') {
         await markTodos()
      } else if (answers.action === 'Update a todo') {
           await updateTodo()
      }  else if(answers.action === 'Delete a todo') {                
        console.log(`\n ${chalk.hex("#3434eb").bold(`This is your to-do list please choose one to delete a to-do.`)}`);
        await listTodos()
        await deleteTodo()
        await listTodos()
      } else {
        console.log(`\n Thank you for using our Todo App.`);
        break;
      }
  
      
    }
  }
  
 await  main()