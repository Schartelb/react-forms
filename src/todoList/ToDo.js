import React from "react";

const ToDo = (todo,removeToDo) => {

return (
    <div>
        {todo}
        <button onClick={()=>removeToDo(todo)}>X</button>
    </div>
)
}

export default ToDo