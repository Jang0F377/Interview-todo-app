import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "@pages/App";
import 'bootstrap/dist/css/bootstrap.min.css';

const template = (
    <App/>
);

ReactDOM.render(template, document.getElementById('app'));