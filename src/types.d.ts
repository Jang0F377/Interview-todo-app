
interface Todo {
    title: string;
    description: string;
    isComplete: boolean;
}

type AddNewItem = (newTodo: Todo) => void;
type RemoveItem = () => void;
type ToggleComplete = (selectedItem : Todo) => void;