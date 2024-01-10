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
    width: 72px;
    height: 100dvh;
}
.leftSectionFixed {
    position: fixed;
    width: inherit;
    padding: 0 8px;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media all and (min-width: 1300px) {
    .leftSection {
        width: 275px;
    }
    .leftSectionFixed {
        align-items: flex-start;
    }

}

.leftSectionFixed nav {
    flex: 1;
}
.leftSectionFixed nav li {
    list-style-type: none;
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
.postButton{
    display: flex;
    align-items: center;
    justify-content: center;

}
.postButton a {
    margin: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
    background: ${(props) => props.theme.colors.blue_0};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 17px;

}
.postButton a span {
    display: none;
}
.postButton a svg {
    display: inline-block;
    fill: white;
    width: 24px;
}

@media all and (min-width: 1300px) {
    .postButton a {
        height: 52px;
        width: 234px;
        border-radius: 8px;
    }
    .postButton a span {
        display: inline-block;
    }
    .postButton a svg {
        display: none;
    }
}

.rightSectionWrapper {
    display: flex;
    align-items: flex-start;
    height: 100dvh;
    flex-direction: column;
    flex-grow: 1;
}
.rightSection {
    display: none;
    padding: 12px 16px;
}
.rightSectionInner {
    height: 100%;
    width: 600px;
    display: flex;
    justify-content: space-between;
}
@media all and (min-width: 1024px) {
    .rightSection {
        display: inline-block;
        width: 380px;
        height: 100%;
    }
    .rightSectionInner {
        width: 990px;
    }
}

.main {
    width: 600px;
    height: 200dvh;
}
.followRecommend {
    margin: 12px 0;
}
.followRecommend h3 {
    padding-bottom: 12px;
}
`;
