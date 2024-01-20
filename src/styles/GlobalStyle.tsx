import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
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
`;
export default GlobalStyle;
