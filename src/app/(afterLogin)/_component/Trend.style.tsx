import Link from "next/link";
import styled from "styled-components";

export const StyledTrend = styled(Link)`
 padding: 5px 10px;
 display: block;
 transition: background-color 0.5s;

 &:hover {
  background-color: ${(props) => props.theme.colors.white_1};
  cursor: pointer;
 }

 > div {
  margin: 7px 0;

  &.count,
  &.posts {
   color: ${(props) => props.theme.colors.black_3};

   span {
    font-size: 13px;
   }
  }
 }
`;
