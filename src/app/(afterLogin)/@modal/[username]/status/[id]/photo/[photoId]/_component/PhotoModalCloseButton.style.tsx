import styled from "styled-components";

export const StyledPhotoModalCloseButton = styled.button`
    &.closeButton {
    width: 34px;
    height: 34px;
    border-radius: 17px;
    border: none;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.75);
    position: absolute;
    left: 16px;
    top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
&.closeButton svg {
    /* fill: white; */
    background: none;
}
&.closeButton:hover {
    background-color: rgba(25,25,25, 0.75);
}
`;
