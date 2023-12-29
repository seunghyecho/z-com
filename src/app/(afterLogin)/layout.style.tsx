import { styled } from "styled-components";
export const StyledAfterLoginLayout = styled.div`
display: flex;
align-items: stretch;
color: #000;

.leftSectionWrapper {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    flex-grow: 1;
}

.leftSection {
    width: 275px;
    height: 100dvh;
}

.leftSectionFixed {
    padding-right: 30px;
    position: fixed;
    width: inherit;
    height: 100dvh;
    display: flex;
    flex-direction: column;
}

.leftSectionFixed nav {
    position: relative;
    margin-top: 20px;
    flex: 1;
}

.logo {
    display: inline-block;
    height: 56px;
    margin-top: 2px;
}

.logoPill {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logoPill:hover {
    background-color: rgba(15,20,25, 0.1);
}

.postButton {
    margin: 16px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
    background: ${(props) => props.theme.colors.blue_0};
    width: 234px;
    border: none;
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 16px;
    border-radius: 8px;
}


.logoutButton{
position: absolute;
bottom: 10px;
width: 100%;
}

.rightSectionWrapper {
    display: flex;
    align-items: flex-start;
    height: 100dvh;
    flex-direction: column;
    flex-grow: 1;
}

.rightSectionInner {
    height: 100%;
    display: flex;
    justify-content: space-between;


    > main {
       min-width: 600px;
        height: 200dvh;
    }
}


.rightSection {
    padding-left: 30px;
    width: 350px;
    height: 100%;
}
`;
