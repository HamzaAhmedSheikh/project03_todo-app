#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";

// import addTodo from "./addTodo.js";
// import listTodos from "./listTodos.js";
// import updateTodo from "./updateTodo.js";
// import deleteTodo from "./deleteTodo.js";
// import markTodos from "./markTodo.js";

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

// add a to-do function
async function addTodo() {
  const newTodo: Todo = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the todo:',
      },
  ]);

  todos.push({ ...newTodo, completed: false });     
  console.log(`\n ${chalk.hex("#34eb55").bold(`"${newTodo.name}"`)} ${chalk.hex("#34eb55").bold('added to the list!')} \n`);  
}

// list all the todos function
async function listTodos() {
  console.log('\n Your todo list:');    
  todos.map((todo, index) => {      
    console.log(`\n ${chalk.hex("#3434eb").bold(`${index + 1}: ${chalk.hex("#34eb55").bold(`${todo.name}`)}`)} ${chalk.hex('#FFA500').bold(`status: ${todo.completed}`)} \n `);     
  });   
 
}

// update-to-do function
async function updateTodo() {
  if (todos.length === 0) {
      console.log('No todos to update!');
  } else {
      const updatedTodo = await inquirer.prompt([
          {
              type: 'list',
              name: 'todo',
              message: 'Select the todo to update:',
              choices: todos.map((t) => t.name),
          },
          {
              type: 'input',
              name: 'name',
              message: 'Enter the new name of the todo:',
          },
      ]);
      const index = todos.findIndex((t) => t.name === updatedTodo.todo);

      todos[index].name = updatedTodo.name;
      // console.log(`"${updatedTodo.todo}" updated to "${updatedTodo.name}"! \n`);
      console.log(`\n ${chalk.hex("#3452eb").bold(`"${updatedTodo.todo}" updated to "${updatedTodo.name}"! \n`)}`);
      
  }
}

// mark the to-do function
async function markTodos() {
  if (todos.length === 0) {
      console.log('No todos to mark!');
  } else {
      const markedTodo = await inquirer.prompt([
          {
              type: 'list',
              name: 'todo',
              message: 'Select the todo to mark as completed:',
              choices: todos.map((t) => t.name),
          },
      ]);
      const index = todos.findIndex((t) => t.name === markedTodo.todo);
      todos[index].completed = true;
      // console.log(`"${markedTodo.todo}" marked as completed! \n`);
      console.log(`\n ${chalk.hex("#34d6eb").bold(`"${markedTodo.todo}" marked as completed! \n`)}`)
  }
}

// delete a to-do function
async function deleteTodo()  {   
  let deleteTodo = await inquirer.prompt([
      {
          type: 'input',
          name: 'index',
          message: 'Select the number of the todo item you want to remove:'
      }
  ])

  if (deleteTodo) {
      const index = deleteTodo.index - 1;
      todos.splice(index, 1);
  }
};


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