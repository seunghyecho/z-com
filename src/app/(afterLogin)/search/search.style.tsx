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
    backdrop-filter: blur(12px);
    position: fixed;

    .searchZone {
        display: flex;
        align-items: center;

        .formZone {
            margin-left: 30px;
            height: 53px;
            width: 426px;
        }
    }
}



`;
