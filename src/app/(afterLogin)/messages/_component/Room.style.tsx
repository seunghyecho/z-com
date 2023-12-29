import styled from "styled-components";

export const StyledRoom = styled.div`
&.room {
    padding: 16px;
    display: flex;
    flex-direction: row;
    transition-property: background-color;
    transition-duration: 0.2s;
    border-color: rgb(239, 243, 244);
    cursor: pointer;
}
&.room:hover {
    background-color: rgba(0, 0, 0, 0.03);
}

.roomUserImage, .roomUserImage img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 16px;
}

.roomChatInfo {
    display: flex;
    flex-direction: column;
    color: #536471;
    font-size: 15px;

}
.roomChatInfo b {
    color: black;
}
`;
