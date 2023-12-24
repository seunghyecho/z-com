import styled from "styled-components";

export const StyledPostForm = styled.form`
 margin-top: 101px;
display: flex;
padding: 16px 16px 8px;
border-color: rgb(239, 243, 244);
border-bottom-width: 1px;
border-bottom-style: solid;

.postUserSection {
    margin-right: 12px;
    width: 40px;
}

.postUserImage {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.postUserImage img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.postForm {
   
}
.postInputSection {
    flex: 1;
}
.postButtonSection {
    width: 100%;
}

textarea {
    width: 100%;
    border: none;
    padding: 12px 0;
    font-size: 14px;
    line-height: 24px;
    outline: none;
    font-family: Malgun Gothic;
    background: none;
}

textarea::placeholder {
    font-family: Malgun Gothic;
}
.footerButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.footerButtonLeft {
    flex: 1;
}
.uploadButton {
    width: 34px;
    height: 34px;
    border: none;
    cursor: pointer;
    border-radius: 17px;
    transition-duration: 0.2s;
    transition-property: background-color;
    /* background-color: rgb(29, 155, 240, 0.01); */
    display: flex;
    align-items: center;
    justify-content: center;
}
.uploadButton:hover {
    background-color: rgb(29, 155, 240, 0.1);
}
.uploadButton svg {
    fill: rgb(29, 155, 240);
}
.actionButton:disabled {
    opacity: 0.5;
}
.actionButton {
    width: 94px;
    height: 36px;
    border: none;
    color: rgb(255, 255, 255);
    font-weight: 400;
    font-size: 13px;
    border-radius: 18px;
    background-color: rgb(127, 196, 243);
}
.actionButton:hover {
    background-color: rgb(26, 140, 216);
}
`;
