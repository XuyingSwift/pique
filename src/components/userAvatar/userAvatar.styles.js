import styled, {css} from 'styled-components';

const ProfileAvatar = css`
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1609106/headshot.png");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, .2);
`

export const Avatar = styled.div`
    ${ProfileAvatar}
    height: 35px;
    width: 35px;
    margin: 0 26px;
    cursor: pointer;
    position: relative;
`