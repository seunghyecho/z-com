import styled from "styled-components";

export const StyledFollowRecommend = styled.div`
margin: 12px 0;
width: 100%;

h3 {
    margin: 30px 0;
    font-weight: 600;
}

.container{
    padding: 7px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    .count{
        color: ${(props) => props.theme.colors.black_3};
        font-size: 12px;
    }
}

.followButtonSection {
    button{
        font-size: 12px;
        padding: 10px;
        width: 100%;
        min-width: 80px;
        border: none;
        border-radius: 30px;
        color: ${(props) => props.theme.colors.white_0};
        background: ${(props) => props.theme.colors.blue_0};
        cursor: pointer;

        &.following{
            color:${(props) => props.theme.colors.blue_2};
            border: 1px solid ${(props) => props.theme.colors.blue_2};
            background: none;
        }
    }
}

`;
