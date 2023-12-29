import styled from "styled-components";

export const StyledProfile = styled.div`
width: 600px;
border-color: rgb(239, 243, 244);
border-right-width: 1px;
border-left-width: 1px;
border-left-style: solid;
border-right-style: solid;
display: flex;
flex-direction: column;
align-items: stretch;

.header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    height: 53px;

    .headerTitle {
        font-size: 20px;
        font-weight: bold;
        margin-left: 30px;
    }
}

.userZone {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(239, 243, 244);

    .userImage {
        display: flex;
        align-items: center;
        margin-right: 12px;
        border-radius: 50%;

        img {
            width: 134px;
            border-radius: 50%;
        }
    }
    .userName {
        margin: 0 12px;
        flex: 1;

        h2 {
            font-weight: bold;
            font-size: 20px;
        }
    }
}

.followButton {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.white_0};
    background-color: ${(props) => props.theme.colors.black_2};
    transition: background-color .2s;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.black_3};
    }
}

`;
