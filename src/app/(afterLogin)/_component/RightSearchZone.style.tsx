import styled from "styled-components";

export const StyledRightSearchZone = styled.div`
.search {
    position: fixed;
    height: 42px;
    width: inherit;
    border-radius: 21px;
    background-color: rgb(239, 243, 244);
    margin-top: 6px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
}

.search svg {
    margin-left: 20px;
    fill: rgb(83, 100, 113);
}

.search input {
    outline: none;
    background-color: inherit;
    border: none;
    padding: 12px;
    margin-left: 5px;
    font-size: 15px;
}

.filterTitle {
    background: #ffffff;
    padding: 12px 16px;
    color: rgba(15,20,25,1.00);
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
    border-radius: 16px;
    border: 1px solid rgb(239,243,244);
    margin-top: 12px;
}

.filterSection {
    padding: 0 16px 12px;
    margin-bottom: 16px;
    border-radius: 16px;
    border: 1px solid rgb(239,243,244);
}

.filterSection label {
    font-size: 15px;
    font-weight: bold;
    height: 36px;
    display: flex;
    align-items: center;
}

.radio {
    display: flex;
}

.radio > div {
    flex: 1;
}
`;
