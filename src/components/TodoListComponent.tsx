import React = require("react");
import {ListItemComponent} from "@components/ListItemComponent";

interface TodoListProps {
    todos: Array<Todo>;
    toggleComplete: ToggleComplete;
}

export const TodoListComponent: React.FC<TodoListProps> = ({todos, toggleComplete}) => {
    return (
        <ul>
            {todos.map(todo => (
                <ListItemComponent todo={todo} toggleComplete={toggleComplete}/>
            ))}
        </ul>
    )
}