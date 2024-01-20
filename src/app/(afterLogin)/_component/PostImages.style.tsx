import Link from "next/link";
import styled from "styled-components";

export const StyledPostImages = styled.div`
color: ${(props) => props.theme.colors.black_2};

.postImageSection {
    display: inline-block;
    margin-top: 12px;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
}
.postImageSection.oneImage {
    /* max-height: 510px; */
    /* min-height: 384px; */
    background-repeat: no-repeat;
}
.postImageSection img {
    border-radius: 16px;
    max-height: 510px;
    width: 100%;
}
.postImageSection.twoImage {
    height: 272px;
    display: flex;
    flex-direction: row;
    gap: 2px;
}
.postImageSection.twoImage a {
    flex: 1;
}
.postImageSection.twoImage a:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
}
.postImageSection.twoImage a:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
}
.postImageSection.threeImage {
    height: 272px;
    display: flex;
    flex-direction: row;
    gap: 2px;
}
.postImageSection.threeImage > a, &.postImageSection.threeImage > div {
    flex: 1
}
.postImageSection.threeImage > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.postImageSection.threeImage > div > a {
    flex: 1;
}
.postImageSection.threeImage > a:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
}
.postImageSection.threeImage > div > a:first-child {
    border-top-right-radius: 16px;
}
.postImageSection.threeImage > div > a:last-child {
    border-bottom-right-radius: 16px;
}

.postImageSection.fourImage {
    height: 272px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
}
.postImageSection.fourImage > a:nth-child(1) {
    border-top-left-radius: 16px;
}
.postImageSection.fourImage > a:nth-child(2) {
    border-top-right-radius: 16px;
}
.postImageSection.fourImage > a:nth-child(3) {
    border-bottom-left-radius: 16px;
}
.postImageSection.fourImage > a:nth-child(4) {
    border-bottom-right-radius: 16px;
}

`;
