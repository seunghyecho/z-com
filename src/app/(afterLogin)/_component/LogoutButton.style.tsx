import styled from "styled-components";

export const StyledLogoutButton = styled.button`
position: fixed;
bottom: 20px;
width: 233px;
display: flex;
align-items: center;
padding: 7px 14px;
cursor: pointer;
border: none;
background-color: unset;
text-align: left;
color: ${(props) => props.theme.colors.black_2};

&:hover {
    background-color: rgba(15,20,25, 0.1);
    border-radius: 8px;
    
}

.logoutUserImage {
    display: flex;
}

.logoutUserImage img {
    width: 36px;
    border-radius: 100%;
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

@media (max-width: 1300px) {
    justify-content: center;
    width: 50px;
    height: 50px;

    &:hover {
        background-color: rgba(15,20,25, 0.1);
        border-radius: 100%;
    }
    .logoutUserImage {
        display: flex;
        align-items: center;
    }
    .logoutUserImage img {
        width: 36px;
        border-radius: 8px;
    }
    .logoutUserName {
        display: none;
    }
    .logOutUserName > div:first-child {
        font-weight: bold;
    }
}
`;
