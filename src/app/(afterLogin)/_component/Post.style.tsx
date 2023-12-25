import styled from "styled-components";

export const StyledPost = styled.article`
.postBar{
    display: inline-block;
    font-size: 0.6rem;
    text-align: center;
    vertical-align: middle;
    margin: 0 3px;
}
&.post {
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    border-color: rgb(239, 243, 244);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    transition-property: background-color, box-shadow;
    transition-duration: 0.2s;
    cursor: pointer;
}
&.post:hover {
    background-color: rgba(0, 0, 0, 0.03);
}

.postWrapper {
    display: flex;
    flex-direction: row;
}
.postReposted {
    display: flex;
    align-items: center;
    color: rgb(83, 100, 113);
    margin-left: 24px;
    font-size: 13px;
    line-height: 20px;
}
.postReposted svg {
    fill: rgb(83, 100, 113)
}

.postUserSection {
    margin-right: 12px;
    width: 40px;
}

.postUserImage {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.postShade {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
}
.postShade:hover {
    background-color: rgba(26, 26, 26, 0.15);
}
.postUserImage img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.postUserName {
    font-weight: bold;
}
.postUserNick, .postDate {
    color: rgb(83, 100, 113);
}
.postDate:hover {
    text-decoration: underline;
}

.postImageSection {

}

.postBody {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.postUserName:hover {
    text-decoration: underline;
}

.postMeta {
    display: flex;
    flex-direction: row;
    align-items: center;

     span{
        display: inline-block;
        margin: 0 3px;
    }
}

.postImageSection {
    display: inline-block;
    margin-top: 12px;
    width: 100%;
    border-radius: 16px;
}
.postImageSection.oneImage {
    max-height: 510px;
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
.postImageSection.threeImage > a, .postImageSection.threeImage > div {
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

.actionButtons {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    column-gap: 4px;
    margin-top: 12px;
}

.actionButtons svg {
    fill: rgb(83, 100, 113);
}
`;
