import React from 'react';
import * as s from './Header.styles';
import {connect} from 'react-redux';
import { auth } from '../firebase/firebase.utils';
import UserAvatar from '../components/userAvatar/userAvatar.component'
import UserAvatarDropdown from '../components/userAvatarDropdown/UserAvatarDropDown.component'
import {CgToggleOn} from 'react-icons/cg'
import { toggleSidebar } from '../redux/sidebar/sidebar.actions';
import { toggleUserIconHidden } from '../redux/userAvatar/userAvatar.actions';

const Header = ({currentUser, hidden, toggleUserIconHidden}) => {
    return (
        <s.HeaderContainer>
            {currentUser ? <s.Toggle>
                <CgToggleOn onClick={toggleUserIconHidden}/>
            </s.Toggle> : null}
               
            <s.HeaderSearch> 
                <s.SearchInput>Search...</s.SearchInput>
            </s.HeaderSearch>
            <s.OptionsContainer>
                {currentUser ? <s.OptionLink to='/' style={{textDecoration: 'none'}}><UserAvatar/></s.OptionLink> : null}
                {currentUser ?  <s.OptionLink to='/' style={{textDecoration: 'none'}} onClick={() => auth.signOut()}> sign out</s.OptionLink> 
                    : <s.OptionLink to='/signin' style={{textDecoration: 'none'}}> Sign In</s.OptionLink> }

            </s.OptionsContainer> 
            {/*{(hidden ) ? null : <UserAvatarDropdown/>}*/}
            
        </s.HeaderContainer>
        
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.userAvatar.hidden, 
   
})

const mapDispatchToProps = dispatch => ({
    toggleUserIconHidden: () => dispatch(toggleUserIconHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);