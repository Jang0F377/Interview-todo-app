import * as React from "react";
import { Container } from "react-bootstrap";

const defaultFooter = () => {
    return (
        <footer className="text-muted">
            <Container>
                <p className="float-right">This is and example project setup for your convenience.</p>
            </Container>
        </footer>
        
    );
}

export default defaultFooter;