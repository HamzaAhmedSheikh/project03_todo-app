import inquirer from "inquirer";
import { todos } from "../app.js";

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
        console.log(`"${markedTodo.todo}" marked as completed!`);
    }
}

export default markTodos;