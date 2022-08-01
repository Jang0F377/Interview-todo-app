import React = require("react");
import {Col, Container, Row} from "react-bootstrap";


interface ListItemProps {
    todo:Todo;
    toggleComplete: ToggleComplete
}


export const ListItemComponent : React.FC<ListItemProps> = ({todo, toggleComplete}) => {


    const TodoChoreList = () => {
        const choreDescArr = todo.description.split(",")

        return (
            <ul>
                {choreDescArr.map((item) => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        )
    }


    return(
        <li key={todo.description} style={{background:'#fff'}} >
            <Container className='border-primary border-3 rounded-2 shadow-sm p-1 m-1'>
                <Row>
                    <Col xs={10}>
                        <label style={{textDecoration : todo.isComplete ? 'line-through' : null}}>
                            <h3 style={{marginLeft:8}}>
                                {todo.title}
                            </h3>
                        </label>
                    </Col>
                    <Col xs={2} sm={2} className='my-auto'>
                        <label style={{textDecoration : todo.isComplete ? 'line-through' : null}}>
                            <input type={"checkbox"} style={{height:20,width:20}} onChange={() => toggleComplete(todo)} checked={todo.isComplete}/>
                        </label>
                    </Col>

                </Row>
                <Row>
                    <label style={{textDecoration : todo.isComplete ? 'line-through' : null}}>
                        <TodoChoreList/>
                    </label>
                </Row>
            </Container>
        </li>

    );
};