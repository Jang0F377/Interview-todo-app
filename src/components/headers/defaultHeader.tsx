import * as React from "react";
import Menu from "@components/menu";
import { Navbar } from "react-bootstrap";

const defaultHeader = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Menu/>
            </Navbar>
        </header>
    );
}

export default defaultHeader;