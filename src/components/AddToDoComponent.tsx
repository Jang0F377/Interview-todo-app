import {useState} from "react";
import React = require("react");
import {Button, Col, Form, Row} from "react-bootstrap";


interface AddToDoProps {
    todos: Array<Todo>;
    addNewItem: AddNewItem;
    removeItem: RemoveItem;
}



export const AddToDoComponent: React.FC<AddToDoProps> = ({addNewItem,todos, removeItem}) => {
    const [newTodoTitle,setNewTodoTitle] = useState<string>('');
    const [newTodoDescription,setNewTodoDescription] = useState<string>('');
    const len = todos.length

    const handleClick = () => {
        if (newTodoTitle && newTodoDescription !== ""){
            addNewItem({title:newTodoTitle,description:newTodoDescription,isComplete:false});
            setNewTodoTitle('')
            setNewTodoDescription('')
        } else alert("Please enter a title and activities");
    }

    return (
        <Form>
            <Form.Group controlId='todoTitle'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} placeholder='Housework'/>
            </Form.Group>
            <Form.Group controlId='todoDescription' className='mt-3'>
                <Form.Label>Specific activities:</Form.Label>
                <Form.Control as='textarea' value={newTodoDescription} onChange={(e) => setNewTodoDescription(e.target.value)} placeholder='Litter box, trash, pick up poop, laundry'/>
                <Form.Text id='todoDescriptionHelpText'>For multiple chores/activities please make a comma separated list</Form.Text>
            </Form.Group>
            <Row>
                <Col xs={12} md>
                    <Button type='button' variant='success' className='m-2' onClick={handleClick}>Add new item</Button>
                </Col>
                <Col xs={12} md>
                    <Button type='button' variant='danger' disabled={!len} onClick={removeItem}  className='m-2' >Remove last item</Button>
                </Col>
            </Row>
        </Form>
    );
};

