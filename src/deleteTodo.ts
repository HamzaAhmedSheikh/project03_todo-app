import inquirer from "inquirer";
import { todos } from "../app.js";

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

export default deleteTodo;