import styled from "styled-components";

export const StyledSinglePost = styled.div`
&.main {
    width: 600px;
    border-color: rgb(239, 243, 244);
    border-right-width: 1px;
    border-left-width: 1px;
    border-left-style: solid;
    border-right-style: solid;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.header {
    display: flex;
    height: 53px;
    align-items: center;
}

.headerTitle {
    font-size: 20px;
    font-weight: bold;
    margin-left: 30px;
}
`;
