import styled, {css} from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 90x;
    background-color: rgba(255, 255, 255, .1);
    justify-content: center;
`
const ProfileAvatar = css`
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1609106/headshot.png");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, .2);
`
export const Avatar = styled.div`
    ${ProfileAvatar}
    height: 64px;
    width: 64px;
    margin: 0 15px;
`

export const Title = styled.div`
    font-size: 20px;
    letter-spacing: 1px;
    color: white;
    padding-right: 10px;
`