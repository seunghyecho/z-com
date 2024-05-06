import styled from "styled-components";

export const StyledFollowRecommend = styled.div`
 width: 100%;

 .container {
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
   background-color: ${(props) => props.theme.colors.white_1};
   cursor: pointer;
  }
 }

 .userLogoSection {
  display: flex;
  align-items: center;

  .userLogo img {
   width: 40px;
   border-radius: 50%;
  }
 }

 .userInfo {
  margin: 0 12px;
  .count {
   color: ${(props) => props.theme.colors.black_3};
   font-size: 12px;
  }
 }

 .followButtonSection {
  button {
   font-size: 12px;
   font-weight: 800;
   padding: 10px;
   width: 100%;
   min-width: 80px;
   border: none;
   border-radius: 30px;
   color: ${(props) => props.theme.colors.white_0};
   background: ${(props) => props.theme.colors.blue_0};
   cursor: pointer;

   &.following {
    color: ${(props) => props.theme.colors.blue_2};
    border: 1px solid ${(props) => props.theme.colors.blue_2};
    background: none;
   }
  }
 }
`;
