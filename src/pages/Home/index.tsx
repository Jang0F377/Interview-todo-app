import * as React from "react";
import DefaultLayout from "@components/layout/defaultLayout";
import { Container, Row } from "react-bootstrap";
import {AddToDoComponent} from "@components/AddToDoComponent";
import {useState} from "react";
import {TodoListComponent} from "@components/TodoListComponent";

export default () => {
  const [todoArr, setTodoArr] = useState<Array<Todo>>([])

  const addNewTodo: AddNewItem = (todo: Todo) => {
    const newTodo = {title:todo.title,description:todo.description,isComplete:false};
    setTodoArr([newTodo,...todoArr])
  };

  const handleDeleteItem: RemoveItem = () => {
    const updatedArr = todoArr.slice(0,-1);
    setTodoArr(updatedArr)
  }

  const toggleComplete: ToggleComplete = todo => {
    const updatedArr = todoArr.map((item) => {
      if (item === todo) {
        return {...item, isComplete: !item.isComplete}
      }
      return item
    })
    setTodoArr(updatedArr)

  }

  return (
    <DefaultLayout>
      <section className="bg-light">
        <Container>
          <Row>
            <h1 className="text-center">Matthew Garrett's To Do List</h1>
          </Row>
          <Row>
            <AddToDoComponent removeItem={handleDeleteItem}  addNewItem={addNewTodo}  todos={todoArr}/>
          </Row>
          <Row className='mt-4'>
            <TodoListComponent todos={todoArr} toggleComplete={toggleComplete}/>
          </Row>
        </Container>
      </section>
    </DefaultLayout>
  );
};
