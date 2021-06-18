import React from 'react';
import * as s from './Header.styles';
import {connect} from 'react-redux';
import { auth } from '../firebase/firebase.utils';
import UserAvatar from '../components/userAvatar/userAvatar.component'
import UserAvatarDropdown from '../components/userAvatarDropdown/UserAvatarDropDown.component'


const Header = ({currentUser, hidden}) => {
    return (
        <s.HeaderContainer>
            <s.HeaderSearch> 
                <s.SearchInput>Search...</s.SearchInput>
            </s.HeaderSearch>
            <s.OptionsContainer>
                {currentUser ?  <s.OptionLink to='/' style={{textDecoration: 'none'}} onClick={() => auth.signOut()}> sign out</s.OptionLink> 
                : <s.OptionLink to='/signin' style={{textDecoration: 'none'}}> Sign In</s.OptionLink> }
                {currentUser ? <s.OptionLink to='div' style={{textDecoration: 'none'}}><UserAvatar/></s.OptionLink> : null}

            </s.OptionsContainer> 
            {(hidden)? null : <UserAvatarDropdown/>}
            
        </s.HeaderContainer>
        
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.userAvatar.hidden
})

export default connect(mapStateToProps)(Header);