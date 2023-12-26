import styled from "styled-components";

export const StyledTab = styled.div`
.main {
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

.searchTop {
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border-color: rgb(239, 243, 244);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    width: 600px;
    position: fixed;
}
.searchZone {
    display: flex;
    align-items: center;
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

.buttonZone {
    width: 56px;
}

.formZone {
    fleX: 1;
    height: 53px;
    width: 526px;
}

&.homeFixed {
    position: fixed;
    z-index: 1;
    width: 598px;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border-color: rgb(239, 243, 244);
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

.homeTab {
    height: 53px;
    display: flex;
}

.homeTab > div {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    position: relative;
}
.homeTab a:hover {
    background-color: rgba(15,20,25, 0.1);
}

.tabIndicator {
    height: 4px;
    align-self: center;
    background-color: rgb(29, 155, 240);
    min-width: 56px;
    width: 56px;
    position: absolute;
    bottom: 0px;
    border-radius: 9999px;
}

.list {
    margin-top: 110px;
}
`;
