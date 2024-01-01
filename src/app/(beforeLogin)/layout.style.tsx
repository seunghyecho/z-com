import styled from "styled-components";

export const StyledBeforeLoginLayout = styled.div`
&.container {
    display: flex;
    flex-direction: row;
    width: 100dvw;
    height: 100dvh;
}
.left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > *{
        margin: 6px 0;
    }
}

.right h1 {
    font-weight: 600;
    font-size: 64px;
    margin: 48px 0;
}
.right h2 {
    font-weight: 600;
    font-size: 31px;
    margin-bottom: 32px;
}
.right h3 {
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 20px;
    margin-top: 40px;
}

.signup {
    width: 300px;
    padding: 16px;
    border-radius: 8px;
    background: ${(props) => props.theme.colors.blue_0};
    color: ${(props) => props.theme.colors.white_0};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
.signup:hover {}

.login {
    width: 300px;
    border-radius: 8px;
    padding: 16px;
    color:${(props) => props.theme.colors.black_3};
    border: 1px solid rgb(207, 217, 222);
    display: flex;
    align-items: center;
    justify-content: center;
}
.login:hover {
    background-color: rgba(29,155,240,0.1);
}

`;
