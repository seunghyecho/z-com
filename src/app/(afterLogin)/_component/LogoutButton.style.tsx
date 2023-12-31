import styled from "styled-components";

export const StyledLogoutButton = styled.button`
display: flex;
align-items: center;
padding: 7px 14px;
width: 100%;
cursor: pointer;
border: none;
background-color: unset;
text-align: left;
color: ${(props) => props.theme.colors.black_2};

&:hover {
    background-color: rgba(15,20,25, 0.1);
    border-radius: 29px;
}

.logoutUserImage {
    display: flex;
}

.logoutUserImage img {
    width: 40px;
    border-radius: 50%;
}
.logoutUserName {
    display: inline-block;
    margin: 0 12px;
}
.logoutUserName > div:first-child {
    font-weight: 600;
}
.logoutUserName > div:last-child {
    color: ${(props) => props.theme.colors.black_3};
}

@media all and (max-width: 1300px) {
    &.logOutButton {
        width: 258px;
    }

    .logoutUserImage {
        display: flex;
        align-items: center;
    }
    .logoutUserName {
        display: none;
        
    }
    .logOutUserName > div:first-child {
        font-weight: bold;
    }
}
`;
