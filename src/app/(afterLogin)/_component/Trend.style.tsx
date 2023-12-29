import Link from "next/link";
import styled from "styled-components";

export const StyledTrend = styled(Link)`
margin-top: 10px;
padding: 15px 10px;
display: block;
transition: background-color .5s;

&:hover{
    background-color: ${(props) => props.theme.colors.black_0};
    cursor: pointer;
}

> div{
    margin: 7px 0;

    &.count,
    &.posts{
        color: ${(props) => props.theme.colors.black_3};
        
        span{
            font-size: 13px;
        }
    }
}
`;
