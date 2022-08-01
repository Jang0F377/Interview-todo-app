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
        <Container className='justify-content-center'>
            <li key={todo.description}>
            <Container>
                <Row>
                    <Col xs={10} sm={6} lg={4}>
                        <label style={{textDecoration : todo.isComplete ? 'line-through' : null}}>
                            <h3>
                                {todo.title}
                            </h3>
                        </label>
                    </Col>
                    <Col xs={2} sm={2} className='my-auto'>
                        <label style={{textDecoration : todo.isComplete ? 'line-through' : null}}>
                            <input type={"checkbox"} style={{height:20,width:20}} onChange={() => toggleComplete(todo)} checked={todo.isComplete}/>
                        </label>
                    </Col>
                    <Col xs={0} sm={4} lg={6} />

                </Row>
                <Row>
                    <label style={{textDecoration : todo.isComplete ? 'line-through' : null}}>
                        <TodoChoreList/>
                    </label>
                </Row>
            </Container>
        </li>
        </Container>

    );
};