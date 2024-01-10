import styled from "styled-components";

export const StyledSearch = styled.div`
.searchTop {
    padding-top: 24px;
    position: fixed;
    z-index: 1;
    width: 598px;
    backdrop-filter: blur(12px);

    .searchZone {
        display: flex;
        align-items: center;

        .formZone {
            margin-left: 30px;
            height: 43px;
            width: 426px;
        }
    }
}


.list {
    margin-top: 130px;
}
`;
