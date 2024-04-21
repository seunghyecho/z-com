import styled from "styled-components";

export const StyledMessageForm = styled.div`

border-top: 1px solid rgba(239, 243, 244, 1.00);
height: 56px;
display: flex;
align-items: center;
justify-content: center;

.form {
    background: rgb(239, 243, 244);
    margin: 4px 12px;
    border-radius: 16px;
    padding: 4px;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
}

.form textarea {
    width: 100%;
    border: none;
    background: transparent;
    font-size: 15px;
    line-height: 20px;
    flex: 1;
    outline: none;
}

@media (prefers-color-scheme: dark) {
    .formZone {
        border-color: rgb(47, 51, 54);
    }

    .form {
        background: rgb(32, 35, 39);
    }

    .form textarea {
        color: white;
    }
}

.submitButton {
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    background: transparent;
}

.submitButton:disabled {
    opacity: 0.5;
    cursor: default;
}

.submitButton svg {
    fill: rgb(29, 155, 240);
}

`;
