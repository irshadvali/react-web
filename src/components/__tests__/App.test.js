import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { exportAllDeclaration } from "@babel/types";

it ('show a Comment Box',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<App/>,div);
    expect(div.innerHTML).toContain('Comment Box')
    console.log(div.innerHTML);
    ReactDOM.unmountComponentAtNode(div);
});
it ('show a Irshad Vali',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<App/>,div);
    expect(div.innerHTML).toContain('irshad vali')
    console.log(div.innerHTML);
    ReactDOM.unmountComponentAtNode(div);
});
it ('show a Comment List',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<App/>,div);
    expect(div.innerHTML).toContain('Comment List')
    console.log(div.innerHTML);
    ReactDOM.unmountComponentAtNode(div);
});