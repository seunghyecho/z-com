import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}

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
