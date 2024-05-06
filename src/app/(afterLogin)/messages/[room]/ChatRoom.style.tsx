import styled from "styled-components";

export const StyledChatRoom = styled.div`
 width: 600px;
 min-height: 100dvh;
 border-color: rgb(239, 243, 244);
 border-right-width: 1px;
 border-left-width: 1px;
 border-left-style: solid;
 border-right-style: solid;
 display: flex;
 flex-direction: column;
 align-items: stretch;
 padding: 0 16px;

 .header {
  height: 54px;
  display: flex;
  align-items: center;
 }
 .header h2 {
  margin-left: 40px;
  font-size: 20px;
 }
 .userInfo {
  padding: 20px 16px 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition-property: background-color;
  transition-duration: 0.2s;
  border-color: rgb(239, 243, 244);
  cursor: pointer;
  border-bottom: 1px solid rgb(239, 243, 244);
  margin-bottom: 20px;
 }
 .userInfo:hover {
  background-color: rgba(0, 0, 0, 0.03);
 }
 .userInfo img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
 }
 .message {
  padding-bottom: 24px;
 }
 .content {
  line-height: 20px;
  padding: 12px 16px;
  font-size: 15px;
 }
 .myMessage {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
 }
 .myMessage .content {
  background-color: #0083eb;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-bottom-left-radius: 22px;
  color: white;
 }
 .yourMessage {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
 }
 .yourMessage .content {
  background-color: #eff3f4;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-bottom-right-radius: 22px;
  color: black;
 }
 .date {
  margin-top: 8px;
  color: #536471;
  font-size: 13px;
 }
 .list {
  flex: 1;
  padding: 0 16px;
 }
`;
