import styled from "styled-components";

export const StyledRightSearchZone = styled.div`
.search {
    position: fixed;
    height: 42px;
    width: inherit;
    border-radius: 21px;
    background-color: rgb(239, 243, 244);
    margin-top: 6px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.search svg {
    margin-left: 20px;
    fill: rgb(83, 100, 113);
}

.search input {
    outline: none;
    background-color: inherit;
    border: none;
    padding: 12px;
    margin-left: 5px;
    font-size: 15px;
    width: 100%;
}

`;
