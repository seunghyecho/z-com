import styled from "styled-components";

export const StyledTrendSection = styled.div`
 margin: 12px 0;
 padding: 12px 0;
 width: 100%;
 border-radius: 8px;
 border: 1px solid ${(props) => props.theme.colors.white_1};

 h3 {
  padding: 12px;
  font-weight: 800;
 }

 .noTrend {
  padding: 12px;
 }
`;
