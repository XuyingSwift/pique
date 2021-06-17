import React from 'react';
import * as s from './SideNav.styles';
import pique from '../assets/PIQUE_png.png';
import {Link} from 'react-router-dom';
import {MenuItemList} from './MenuItem';
import UserProfile from '../components/userSidenavProfile/UserSidenaProfile.component'

class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            isOpen : true
        }
    }
   MeunItemJSX = MenuItemList.map(
        (item, index) => {
            console.log(item)
            return (
                <Link to={`${item.path}`} style={{textDecoration: 'none'}} key={index}>
                    <s.MenuItem>
                        <s.Icon>{item.icon}</s.Icon>
                        <span>{item.title}</span>
                    </s.MenuItem>
                </Link>
            )
        }
    )

    isOpen = () => {
        this.setState({isOpen : !this.state.isOpen})
    }

    render() {
        return (
            <s.SidenavContainer>
                <s.HeaderWrapper>
                    <s.LogoIcon src={pique}/>
                        <s.SidebarHeader>PIQUE</s.SidebarHeader>               
                </s.HeaderWrapper>
                <UserProfile/>
                <s.MenuItemList>
                       {this.MeunItemJSX}
                </s.MenuItemList>
                <s.ToggleContainer onClick={this.isOpen}>
                    <s.Toggler />
                </s.ToggleContainer>
            </s.SidenavContainer>
        )
    }   
}

export default SideNav