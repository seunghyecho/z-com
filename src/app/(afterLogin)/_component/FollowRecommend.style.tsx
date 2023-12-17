import styled from "styled-components";

export const StyledFollowRecommend = styled.div`


.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 14px;
    width: 100%;
    text-align: left;
    color:  #2a68a6f3;
    }

&:hover {
    background-color: rgba(15,20,25, 0.1);
    border-radius: 29px;
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
        color:#829bb5;
        font-size: 12px;
    }
}
.followButtonSection {
    button{
        font-size: 12px;
        padding: 10px;
        width: auto;
        border: none;
        background: none;
        cursor: pointer;
        width: auto;
        border-radius: 6px;
        color:#fff;
        background-color: #2a68a6f3;
    }
}

`;
