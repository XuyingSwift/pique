import React from 'react';
import * as s from './SideNav.styles';
import pique from '../assets/PIQUE_png.png';
import {Link} from 'react-router-dom';
import {MenuItemList} from './MenuItem';
import UserProfile from '../components/userSidenavProfile/UserSidenaProfile.component'
import {connect} from 'react-redux';
const SideNav = ({currentUser}) => {
    
    console.log(" side bar djfks", currentUser)
    const MeunItemJSX = MenuItemList.map(
        (item, index) => {
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

    return (
            <s.SidenavContainer>
                <s.HeaderWrapper>
                    <s.LogoIcon src={pique}/>
                        <s.SidebarHeader>PIQUE</s.SidebarHeader>               
                </s.HeaderWrapper>
                {currentUser ? <UserProfile/> : null}              
                <s.MenuItemList>
                       {MeunItemJSX}
                </s.MenuItemList>
            </s.SidenavContainer>
        )
    
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.userAvatar.hidden, 
})
export default connect(mapStateToProps)(SideNav)