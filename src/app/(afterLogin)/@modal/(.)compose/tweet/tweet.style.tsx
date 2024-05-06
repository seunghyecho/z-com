import styled from "styled-components";

export const StyledTweetModal = styled.div`
 .modalBackground {
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.black_1};
 }
 .modal {
  background-color: ${(props) => props.theme.colors.white_0};
  position: relative;
  top: 5%;
  max-width: 80vw;
  min-width: 600px;
  max-height: 300px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
 }

 .closeButton {
  width: 34px;
  height: 34px;
  border-radius: 17px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white_0};
  position: absolute;
  left: 8px;
  top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .closeButton:hover {
  background-color: ${(props) => props.theme.colors.black_0};
 }

 .modalForm {
  display: flex;
  flex-direction: column;
  flex: 1;
 }
 .modalOriginal {
  padding: 0 16px 20px;
  margin-top: 54px;
  margin-bottom: -54px;
  display: flex;
  flex-direction: row;
 }
 .modalBody {
  padding: 0 16px;
  flex: 1;
  margin-top: 54px;
  display: flex;
  flex-direction: row;
 }

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

 .inputDiv {
  flex: 1;
 }

 .input {
  width: 100%;
  border: none;
  outline: none;
 }
 .input::placeholder {
  font-family: "Malgun Gothic", sans-serif;
 }

 .modalFooter {
  padding: 0 16px;
 }

 .modalDivider {
  width: 100%;
  border-bottom: 1px solid rgb(239, 243, 244);
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
  background-color: ${(props) => props.theme.colors.gray_1};
  transition-duration: 0.2s;
  transition-property: background-color;
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .uploadButton:hover {
  background-color: ${(props) => props.theme.colors.gray_0};
 }
 .uploadButton svg {
  fill: ${(props) => props.theme.colors.blue_1};
 }

 .actionButton {
  cursor: pointer;
  width: 94px;
  height: 36px;
  border-radius: 8px;
  border: none;
  margin: 8px 0;
  background: ${(props) => props.theme.colors.blue_0};
  color: ${(props) => props.theme.colors.white_0};
 }
 .actionButton:disabled {
  opacity: 0.5;
 }
`;
