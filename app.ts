#! /usr/bin/env node
import inquirer from 'inquirer';

export interface Todo {
    name: string;
    completed: boolean;
}

export let todos: Todo[] = [];