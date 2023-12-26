import styled from "styled-components";

export const StyledPhotoModal = styled.div`
&.container {
    background: rgba(0, 0, 0, 0.95);
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: row;
}

.imageZone {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.imageZone .image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex: 1;
}
.imageZone img {
    display: none;
}

.buttonZone {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.buttonInner {
    width: 600px;
    height: 60px;
}

.commentZone {
    width: 350px;
    background-color: white;
    border-left: 1px solid rgb(239, 243, 244);
    overflow: auto;
}
`;
