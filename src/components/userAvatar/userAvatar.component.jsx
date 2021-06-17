import React from 'react';
import * as s from './userAvatar.styles'
import {connect} from 'react-redux';
import {toggleUserIconHidden} from '../../redux/userAvatar/userAvatar.actions';

const UserAvatar = ({toggleUserIconHidden}) => {
    return (
        <s.Avatar onClick={toggleUserIconHidden}/>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleUserIconHidden: () => dispatch(toggleUserIconHidden())
})
export default connect(null, mapDispatchToProps)(UserAvatar);