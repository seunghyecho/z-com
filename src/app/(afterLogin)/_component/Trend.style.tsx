import Link from "next/link";
import styled from "styled-components";

export const StyledTrend = styled(Link)`
    margin: 30px 0;
    display: block;

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
