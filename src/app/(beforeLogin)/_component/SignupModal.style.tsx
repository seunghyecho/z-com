import styled from "styled-components";

export const StyledSignupModal = styled.div`

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

`;
