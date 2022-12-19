import inquirer from "inquirer";
import chalk from "chalk";
import { todos } from "../app.js";

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

export default updateTodo;