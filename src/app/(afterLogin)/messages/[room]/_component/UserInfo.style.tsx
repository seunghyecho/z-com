import styled from "styled-components";

export const StyledUserInfo = styled.div`
.header {
    height: 54px;
    display: flex;
    align-items: center;
    padding: 0 16px;
}
.header h2 {
    margin-left: 40px;
    font-size: 20px;
}
.userInfo {
    padding: 20px 16px 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition-property: background-color;
    transition-duration: 0.2s;
    border-color: rgb(239, 243, 244);
    cursor: pointer;
    border-bottom: 1px solid rgb(239, 243, 244);
    margin-bottom: 20px;
}
.userInfo:hover {
    background-color: rgba(0, 0, 0, 0.03);
}
.userInfo img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
}
`;
