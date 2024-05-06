import styled from "styled-components";

export const StyledRightSearchZone = styled.div`
 .search {
  position: fixed;
  height: 42px;
  width: inherit;
  border-radius: 8px;
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

 /* filter */
 .filterTitle {
  margin-top: 12px;
  margin-bottom: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid rgb(239, 243, 244);
  color: rgba(15, 20, 25, 1);
  font-weight: bold;
 }

 .filterSection {
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid rgb(239, 243, 244);

  > div {
   margin-bottom: 32px;
  }

  .filterLabel {
   padding-bottom: 8px;
   display: flex;
   align-items: center;
   font-weight: bold;
  }

  .radio {
   margin: 16px 0;
   display: flex;
   justify-content: space-between;

   background-image: url(CheckedFocus);

   input[type="radio"] {
    appearance: none;
    border: max(2px, 0.1em) solid gray;
    border-radius: 50%;
    width: 1.25em;
    height: 1.25em;

    &:checked {
     border: ${(props) => props.theme.colors.border};
    }

    &:focus-visible {
     outline: ${(props) => props.theme.colors.outline};
     outline-offset: max(2px, 0.1em);
    }

    &:hover {
     box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
     cursor: pointer;
    }
   }
  }
 }
`;
