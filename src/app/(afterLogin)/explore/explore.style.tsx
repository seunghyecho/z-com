import styled from "styled-components";

export const StyledExplore = styled.div`
    &.main {
        width: 600px;
        border-color: rgb(239, 243, 244);
        border-right-width: 1px;
        border-left-width: 1px;
        border-left-style: solid;
        border-right-style: solid;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .formZone {
        width: 566px;
        margin-bottom: 60px;
    }

    .trendBg {
        margin-top:0;
        background-color: rgb(247, 249, 249);
    }
    .trend {
        border-top: 1px solid rgb(239, 243, 244);
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 12px;
        padding: 12px 16px;
    }
`;
