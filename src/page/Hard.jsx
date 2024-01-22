//TO-DO LIST
//----------------------------------------------------------------
// Note:  Solutions should use class components. 
// HARD: Develop a todo list app with React hooks and React Router. 
// Implement features like adding, editing, and deleting tasks.
// Use React Router to navigate between different pages, such as a task 
// list and a task detail page.

//*********NOTES ***********
//** if you type in and submit a task, if you are to click 'edit' on that task... 
// it will direct to a new route named /TaskDetail which will display 
// task id # and task information



import React from 'react'
import TodoList from '../components/TodoList'

export default function Hard() {
    return (
        <div>
            <TodoList/>
        </div>
    )
}






