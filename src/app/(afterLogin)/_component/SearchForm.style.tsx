import styled from "styled-components";

export const StyledSearchForm = styled.form`
position: fixed;
width: inherit;
height:42px;
border-radius: 8px;
background-color: rgb(239, 243, 244);
display: flex;
align-items: center;
overflow: hidden;

 svg {
    margin-left: 20px;
}

 input {
    padding: 0 12px;
    width: 100%;
    border: none;
    outline: none;
    background-color: unset;
}

`;
