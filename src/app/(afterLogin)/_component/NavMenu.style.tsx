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
            display: flex;
            margin: 2px 0;
            width: 100%;
            height: 38px;
            padding: 7px 14px;
            align-items: center;

            &:hover {
            background-color: rgba(15,20,25, 0.1);
            border-radius: 8px;
        }
        }
       
        .navPill > div {
            margin-left: 20px;
             
        }
    }
}


@media (max-width: 1300px) {
    li a {
        display: flex;
        align-items: center;
        justify-content: center;

        .navPill{
            justify-content: center;
            margin: 4px 0;
            padding: 0;
            width: 36px;
            height: 36px;

            &:hover {
                border-radius: 100%;
            }

            > div {
                margin-left: 20px;
                margin-right: 16px;
                font-size: 20px;
                
                display: none;
            }

        }
    }
}
   
`;
