import styled, { css } from "styled-components";

export const StyledActionButton = styled.div`


.commentButton, .repostButton, .heartButton {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.commentButton button, .repostButton button, .heartButton button {
    background: #ffffff;
    border: none;
    outline: none;
    display: flex;
    width: 38px;
    height: 38px;
    align-items: center;
    justify-content: center;
    border-radius: 19px;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 0.2s;
    margin-right: 4px;
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

.commentButton, .repostButton, .heartButton {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.commentButton button, .repostButton button, .heartButton button {
    background: #ffffff;
    border: none;
    outline: none;
    display: flex;
    width: 38px;
    height: 38px;
    align-items: center;
    justify-content: center;
    border-radius: 19px;
    cursor: pointer;
    transition-property: background-color;
    transition-duration: 0.2s;
    margin-right: 4px;
}
.actionButtons .count {
    font-size: 13px;
    color: rgb(83, 100, 113);
}

.commentButton button {
    background-color: rgba(29, 155, 240, 0.01);
}

.commentButton:hover button {
    background-color: rgba(29, 155, 240, 0.1);
}

.repostButton button {
    background-color: rgba(0, 186, 124, 0.01);
}

.repostButton:hover button {
    background-color: rgba(0, 186, 124, 0.1);
}

.heartButton button {
    background-color: rgba(249, 24, 128, 0.01)
}

.heartButton:hover button {
    background-color: rgba(249, 24, 128, 0.1)
}


`;

export const CommentButton = styled.div<{
  commented?: boolean;
  white?: boolean;
}>`
 ${({ commented }) =>
   commented &&
   css`
    &.commentButton.commented svg, &.commentButton:hover svg {
        fill: rgb(29, 155, 240)
    }

    &.commentButton.commented .count, &.commentButton:hover .count {
        color: rgb(29, 155, 240);
    }
  `}

  ${({ white }) =>
    white &&
    css`
    &.commentButton.white svg, &.commentButton.white .count {
        fill: white;
        color: white;
    }
   
  `}
`;

export const RepostButton = styled.div<{ reposted?: boolean; white?: boolean }>`
${({ reposted }) =>
  reposted &&
  css`
    &.repostButton.reposted svg, &.repostButton:hover svg {
        fill: rgb(11, 175, 123)
    }

    &.repostButton.reposted .count, &.repostButton:hover .count {
        color: rgb(11, 175, 123)
    }
 `}

 ${({ white }) =>
   white &&
   css`
  
    &.repostButton.white svg, &.repostButton.white .count {
        fill: white;
        color: white;
    }
   
  `}

`;

export const HeartButton = styled.div<{ liked?: boolean; white?: boolean }>`
${({ liked }) =>
  liked &&
  css`    
    &.heartButton.liked svg, &.heartButton:hover svg {
        fill: rgb(228, 34, 126);
    }

    &.heartButton.liked .count, &.heartButton:hover .count {
        color: rgb(228, 34, 126);
    }
 `}
 ${({ white }) =>
   white &&
   css`
  
    &.heartButton.white svg, &.heartButton.white .count {
        fill: white;
        color: white;
    }
  `}

`;