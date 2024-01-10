import styled from "styled-components";

export const StyledSearch = styled.div`
width: 600px;
border-color: rgb(239, 243, 244);
border-right-width: 1px;
border-left-width: 1px;
border-left-style: solid;
border-right-style: solid;
display: flex;
flex-direction: column;
align-items: stretch;

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
