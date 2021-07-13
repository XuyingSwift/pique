import React from 'react';
import * as s from './Header.styles';
import {connect} from 'react-redux';
import UserAvatar from '../components/userAvatar/userAvatar.component'
import UserAvatarDropdown from '../components/userAvatarDropdown/UserAvatarDropDown.component'
import {FaBars} from 'react-icons/fa'
import { toggleSidebar } from '../redux/headerToggle/headerToggle.actions'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selector';
import { SelectHeaderToggle } from '../redux/headerToggle/headerToggle.selector';
import { SelectUserAvatarHidden } from '../redux/userAvatar/userAvatar.selector';

const Header = ({currentUser, hidden, toggleSidebar}) => {
    return (
        <s.HeaderContainer>
            {currentUser ? <s.Toggle>
                <FaBars onClick={toggleSidebar}/>
            </s.Toggle> : null}
               
            <s.HeaderSearch> 
                <s.SearchInput>Search...</s.SearchInput>
            </s.HeaderSearch>
            <s.OptionsContainer>
                {currentUser ? <s.OptionLink to='/' style={{textDecoration: 'none'}}><UserAvatar/></s.OptionLink> : null}
                {currentUser ? <s.OptionLink to='/about' style={{textDecoration: 'none'}}>About</s.OptionLink>  : null}
                <s.OptionLink to='/signin' style={{textDecoration: 'none'}}> Sign In</s.OptionLink>
               

            </s.OptionsContainer> 
            {(!hidden ) && <UserAvatarDropdown/>}
            
        </s.HeaderContainer>
        
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    toggle: SelectHeaderToggle,
    hidden: SelectUserAvatarHidden
})

const mapDispatchToProps = dispatch => ({
    toggleSidebar: () => dispatch(toggleSidebar())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);