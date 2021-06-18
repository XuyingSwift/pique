import React from 'react';
import * as s from './UserAvatarDropdown.styles';
import {auth} from '../../firebase/firebase.utils'
import {AiOutlineProfile} from 'react-icons/ai';
import {RiAccountBoxLine} from 'react-icons/ri';
import {IoCodeWorkingOutline} from 'react-icons/io5'


const UserAvatarDropdown = () => {

  
    
    return (
        <s.CartDropdownContainer>
            <s.HeaderMenu>
                <s.DropdownList>
                <s.DropdownListItem>
                    <s.MenuIcon><AiOutlineProfile/></s.MenuIcon>
                    <s.MenuTitle>Profile</s.MenuTitle>
                </s.DropdownListItem>

                <s.DropdownListItem>
                <s.MenuIcon><RiAccountBoxLine/></s.MenuIcon>
                <s.MenuTitle>Acount</s.MenuTitle>
                </s.DropdownListItem>

                <s.DropdownListItem>
                <s.MenuIcon><IoCodeWorkingOutline/></s.MenuIcon>
                <s.MenuTitle>Projects</s.MenuTitle>
                </s.DropdownListItem>

                </s.DropdownList>
            </s.HeaderMenu>

        </s.CartDropdownContainer>
    
    )
}



export default UserAvatarDropdown;