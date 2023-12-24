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
    background-color: rgb(127, 196, 243);
    width: 234px;
    border: none;
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 16px;
    border-radius: 8px;
}

.postButton:hover {
    background-color: rgb(26, 140, 216);
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
       
        height: 200dvh;
    }
}


.rightSection {
    padding-left: 30px;
    width: 350px;
    height: 100%;
}

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

.followRecommend {
    margin: 12px 0;
    padding: 12px 16px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 6px;
    width: inherit;

    background: #fff;
    
    h3 {
        padding-bottom: 12px;
    }
}
`;
