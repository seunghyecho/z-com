import styled from "styled-components";

export const StyledPost = styled.div`
 color: ${(props) => props.theme.colors.black_2};

 .postBar {
  display: inline-block;
  font-size: 0.6rem;
  text-align: center;
  vertical-align: middle;
  margin: 0 3px;
 }

 .postWrapper {
  display: flex;
  flex-direction: row;
 }
 .postReposted {
  display: flex;
  align-items: center;
  color: rgb(83, 100, 113);
  margin: 12px 0 6px;
  font-size: 13px;
  line-height: 20px;

  > * {
   margin-right: 5px;
  }

  svg {
   fill: rgb(83, 100, 113);
  }
 }

 .postUserSection {
  margin-right: 12px;
  width: 40px;
 }

 .postUserImage {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
 }

 .postShade {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
 }
 .postShade:hover {
  background-color: rgba(26, 26, 26, 0.15);
 }
 .postUserImage img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
 }

 .postUserName {
  font-weight: 600;

  + span.postUserId {
   color: ${(props) => props.theme.colors.black_3};
  }
 }
 .postUserNick,
 .postDate {
  color: rgb(83, 100, 113);
 }
 .postDate:hover {
  text-decoration: underline;
 }

 .postBody {
  display: flex;
  flex-direction: column;
  width: 100%;
 }
 .postUserName:hover {
  text-decoration: underline;
 }

 .postMeta {
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
   display: inline-block;
   margin: 0 3px;
  }
 }

 .actionButtons {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  column-gap: 4px;
  margin-top: 12px;
 }

 .actionButtons svg {
  fill: rgb(83, 100, 113);
 }
`;
