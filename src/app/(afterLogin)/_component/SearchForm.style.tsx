import styled from "styled-components";

export const StyledSearchForm = styled.form`
&.search {
    position: fixed;
    height: inherit;
    width: inherit;
    border-radius: 8px;
    background-color: rgb(239, 243, 244);
    display: flex;
    align-items: center;
    overflow: hidden;
}

&.search svg {
    margin-left: 20px;
}

&.search input {
    padding: 0 12px;
    width: 100%;
    border: none;
    outline: none;
    background-color: unset;
}

`;
