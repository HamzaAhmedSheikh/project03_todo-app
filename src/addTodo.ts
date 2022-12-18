import inquirer from "inquirer";
import { Todo } from '../app.js';
import { todos } from "../app.js";
import chalk from "chalk";

async function addTodo() {
    const newTodo: Todo = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter the name of the todo:',
        },
    ]);

    todos.push({ ...newTodo, completed: false });     
    console.log(`${chalk.hex("#34eb55").bold(`"${newTodo.name}"`)} ${chalk.hex("#34eb55").bold('added to the list!')} \n`);
    
}

export default addTodo;