import styled from "styled-components";

export const StyledProfile = styled.div`
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

.userZone {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(239, 243, 244);
    padding: 12px 16px;
}

.userImage {
    display: flex;
    align-items: center;
    margin-right: 12px;
    border-radius: 50%;
}
.userImage img {
    width: 134px;
    border-radius: 50%;
}
.userName {
    margin: 0 12px;
    flex: 1;
}
.userName > div:first-child {
    font-weight: bold;
    font-size: 20px;
}
.userName > div:last-child {
    font-size: 15px;
}
.followButton {
    border: 1px solid rgb(207, 217, 222);
    padding: 0 16px;
    border-radius: 17px;
    height: 34px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: white;
    cursor: pointer;
}
.followButton:hover {
    background-color: rgb(39,44,48);
}

.backButton {
    width: 34px;
    height: 34px;
    background-color: #fff;
    border: none;
    border-radius: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.backButton:hover {
    background-color: rgba(15, 20, 25, 0.1);
}

`;
