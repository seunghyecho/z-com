import styled from "styled-components";

export const StyledNavMenu = styled.ul`
display: inline-block;
width: 100%;

li{
    list-style: none;
    width: 100%;

    a{
        display: block;
        width: 100%;

        .navPill {
            display: inline-flex;
            margin: 2px 0;
            width: 100%;
            height: 38px;
            padding: 7px 14px;
            align-items: center;
        }
        .navPill:hover {
            background-color: rgba(15,20,25, 0.1);
            border-radius: 29px;
        }

        .navPill > div {
            margin-left: 20px;
            font-size: 14px;
        }
    }
}
`;
