import { todos } from "../app.js";
import chalk from "chalk";

async function listTodos() {
    console.log('\n Your todo list:');    
    todos.map((todo, index) => {      
      console.log(`\n ${chalk.hex("#3434eb").bold(`${index + 1}: ${chalk.hex("#34eb55").bold(`${todo.name}`)}`)} ${chalk.hex('#FFA500').bold(`status: ${todo.completed}`)} \n `);     
    });   
   
}

export default listTodos