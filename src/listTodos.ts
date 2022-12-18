import { todos } from "../app.js";
import chalk from "chalk";

async function listTodos() {
    console.log('Your todo list:');
    todos.map((todo, index) => {
      // console.log(`${index + 1}: ${todo.name} status: ${todo.completed}`); #329F66
      console.log(`${chalk.hex("#34a5eb").bold(`${index + 1}: ${chalk.hex("#34eb55").bold(`${todo.name}`)}`)} ${chalk.hex('#FFA500').bold(`status: ${todo.completed}`)} \n `);
      
    });    
}

export default listTodos