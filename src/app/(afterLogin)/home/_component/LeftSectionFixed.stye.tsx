import styled from "styled-components";

export const StyledLeftSectionFixed = styled.div`
 display: flex;
 align-items: flex-end;
 flex-direction: column;
 flex-grow: 1;
 height: 100dvh;

 .container {
  position: fixed;
  width: inherit;
  padding: 0 8px;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white_0};

  nav {
   flex: 1;
  }
  nav li {
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
   background-color: rgba(15, 20, 25, 0.1);
  }

  @media all and (min-width: 1300px) {
   align-items: flex-start;
  }
 }
`;
