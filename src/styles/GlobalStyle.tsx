import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    .article.post {
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    border-color: rgb(239, 243, 244);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    transition-property: background-color, box-shadow;
    transition-duration: 0.2s;
    cursor: pointer;
}
.article.post:hover {
    background-color: rgba(0, 0, 0, 0.03);
}
    .container.photomodal {
        background: rgba(0, 0, 0, 0.95);
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100dvw;
        height: 100dvh;
        display: flex;
        flex-direction: row;
    }

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

    .header {
        padding: 12px 16px;
        display: flex;
        align-items: center;
        height: 53px;

        .headerTitle {
            font-size: 20px;
            font-weight: bold;
            margin-left: 30px;
        }
    }

    .noData{
        margin: 50px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.colors.black_0};
    }

    .userZone {
        padding: 12px 16px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgb(239, 243, 244);

        .userImage {
            display: flex;
            align-items: center;
            margin-right: 12px;
            border-radius: 50%;

            img {
                width: 134px;
                min-height: 134px;
                background:${(props) => props.theme.colors.blue_0};
                border-radius: 50%;
            }
        }
        .userName {
            margin: 0 12px;
            flex: 1;

            h2 {
                font-weight: bold;
                font-size: 20px;
            }
        }
    }

    .followButton {
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.colors.white_0};
        background-color: ${(props) => props.theme.colors.black_2};
        transition: background-color .2s;
        border-radius: 8px;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: ${(props) => props.theme.colors.black_3};
        }
    }

    @keyframes rotating {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
    
    .loader {
        animation: rotating 2s linear infinite;
    }

    .afterLoginLayout.container{
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
    }

    /* signupmodal */
    #signupModal{
        .modalBackground {
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.modal {
    background: #ffffff;
    position: relative;
    top: 5%;
    max-width: 80vw;
    min-width: 600px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    height: 550px;
}

.modalHeader {
    padding: 36px 80px 20px;
    font-size: 30px;
    font-weight: bold;
}

.modal form {
    display: flex;
    flex-direction: column;
    /* flex: 1; */
}

.modalBody {
    /* flex: 1; */
    padding: 0 80px;
}

.inputDiv {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 16px 0;
    padding: 8px;
    width: 100%;    
    height: 56px;
    outline: none;
    border-radius: 8px;
    border: 1px solid rgb(207, 217, 222);
}
.inputLabel {
    width: 100%;
    
    display: none;

    position: absolute;
    top: 0;
    border: 1px solid rgb(207, 217, 222);
    border-radius: 4px;
    font-size: 13px;
    height: 56px;
    padding: 8px 8px 0;
    color: rgb(83, 100, 113);
}
.inputLabel:focus-within {
    color: red;
}
.input {
    height: 100%;
    border: none;
    outline: none;
    background:none;
    font-weight: 600;
    font-size: 16px;
    color:${(props) => props.theme.colors.black_1};

    &::placeholder{
        font-weight: 600;
        color:${(props) => props.theme.colors.black_0};
    }
}

.modalFooter {
    padding: 24px 80px;
}

.actionButton {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: none;
    background:${(props) => props.theme.colors.blue_0};
    color:${(props) => props.theme.colors.white_0};
}
.actionButton:disabled {
    opacity: 0.5;
}
.actionButton:disabled:hover {
    background-color: rgb(15, 20, 25);
}
.actionButton:hover {
    background-color: rgb(39,44,48);
}

.closeButton {
    width: 34px;
    height: 34px;
    border-radius: 17px;
    border: none;
    cursor: pointer;
    background-color: #fff;
    position: absolute;
    left: 16px;
    top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.closeButton:hover {
    background-color: rgba(15,20,25, 0.1);
}

.error {
    font-weight: bold;
    color: red;
}

    }
`;
export default GlobalStyle;
