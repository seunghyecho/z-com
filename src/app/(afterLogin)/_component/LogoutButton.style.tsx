import styled from "styled-components";

export const StyledLogoutButton = styled.button`
display: flex;
align-items: center;
padding: 7px 14px;
width: 100%;
cursor: pointer;
border: none;
background-color: #fff;
text-align: left;
color:  #2a68a6f3;;

&:hover {
    background-color: rgba(15,20,25, 0.1);
    border-radius: 29px;
}

.logoutUserImage {
    display: flex;
    align-items: center;
}
.logoutUserImage img {
    width: 40px;
    border-radius: 50%;
}
.logoutUserName {
    margin: 0 12px;
}
.logoutUserName > div:first-child {
    font-weight: bold;
}
`;
