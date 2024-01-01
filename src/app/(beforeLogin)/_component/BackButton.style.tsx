import styled from "styled-components";

export const StyledBackButton = styled.button`
    width: 43px;
    height: 43px;
    border: none;
    border-radius: 100%;
    background-color: unset;
    cursor: pointer;
    transition: background-color .5s;

    &:hover {
        
    background-color: ${(props) => props.theme.colors.black_1};
}
`;
