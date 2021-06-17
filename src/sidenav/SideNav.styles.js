import styled from 'styled-components';

export const Close = styled.div`
    left:0;
    transition: 350ms;
`

export const SidenavContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    grid-area: sidenav;
    height: 100%;
    background-color: #134e6f;
    padding-left: 30px;
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`
export const SidebarHeader = styled.h3`
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 6px;
    color: white;
`
export const LogoIcon = styled.img`

    height: 65px;
    width: 100px;
    margin-bottom: 0;
`
export const MenuItemList = styled.div`
    padding: 0;
    margin-top: 25px;
    list-style-type: none;
`

export const MenuItem = styled.div`
    padding: 20px 20px 20px 20px;
    color: white;
    display: flex;
    flex-direction: row;

    &:hover{
        background-color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
    }
`

export const Icon = styled.div`
    margin-right: 25px;
`



export const ToggleContainer = styled.div`
    position: absolute;
    width: 30%;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
`

export const Toggler = styled.div`
    height: 40px;
    cursor: pointer;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: .25em;
        height: .1em;
        width: 100%;
        background: #fff;
        box-shadow: 
            0 .75em 0 0 #fff,
            0 1.5em 0 0 #fff ;
    }
`

