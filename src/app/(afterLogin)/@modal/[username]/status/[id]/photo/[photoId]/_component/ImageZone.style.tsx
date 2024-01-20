import styled from "styled-components";

export const StyledImageZone = styled.div`
&.imageZone {
    flex: 1;
    display: flex;
    flex-direction: column;
}
&.imageZone .image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex: 1;
}
&.imageZone img {
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

`;
