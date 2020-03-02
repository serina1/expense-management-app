import React from "react";
import styled from "styled-components";

const Styles = styled.div`
.button1 {
    display:inline-block;
    padding:0.35em 1.2em;
    border:0.1em solid rgba(255, 255, 255, 0.7);
    margin:0 0.3em 0.3em 0;
    border-radius:2.5em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    font-size: 28px;
    color:#FFFFFF;
    text-align:center;
    transition: all 1.4s;
    background: rgba(255, 255, 255, 0.1);
}
.button1:hover {
    color:transparent;
    background: rgba(0, 0, 0, 0);
    font-size: 5px;
    border:0.1em solid transparent;
}
@media all and (max-width:30em){
    a.button1{
        display:block;
        margin:0.4em auto;
    }
}`;

function SignupButton({ children, type, onClick, buttonStyle, buttonSize }) {
  return (
    <Styles>
      <button onClick={onClick} type={type} className="button1">
        {children}
      </button>
    </Styles>
  );
}

export default SignupButton;
