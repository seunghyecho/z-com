import styled from "styled-components";

export const StyledTab = styled.div`
 .homeFixed {
  position: fixed;
  z-index: 1;
  width: 598px;
  backdrop-filter: blur(12px);
  border-color: rgb(239, 243, 244);
  border-bottom-width: 1px;
  border-bottom-style: solid;
 }

 .homeText {
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  padding: 12px 16px;
 }

 .homeTab {
  height: 53px;
  display: flex;
 }

 .homeTab > div {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  position: relative;
 }
 .homeTab a:hover {
  background-color: rgba(15, 20, 25, 0.1);
 }

 .tabIndicator {
  height: 4px;
  align-self: center;
  background: ${(props) => props.theme.colors.blue_0};
  min-width: 100px;
  width: 100px;
  position: absolute;
  bottom: 0px;
  border-radius: 9999px;
 }
`;
