import React, { useState } from "react";
import NewTodoForm from './NewTodoForm'
import { v4 as uuid } from "uuid";
import ToDo from './ToDo'

const TodoList = () => {
    const INITIAL_STATE = ["Dishes", "Laundry"]
    const addToDo = toDo => {
        setToDoList(toDoList => ([...toDoList, toDo]));
    }
    const [toDoList, setToDoList] = useState(INITIAL_STATE)
    const removeToDo=(toDo)=>{
        setToDoList(toDoList.filter(item=>
            item!==toDo))
    }
    const renderToDo = () => {
        return (
            <ul>
                {toDoList.map(todo => (
                    <ToDo 
                    value={todo}/>
                ))}
            </ul>
        )
    }
    return (
        <div>
            <NewTodoForm
                addToDo={addToDo} />

            {renderToDo()}
        </div>
    )
}
export default TodoList;