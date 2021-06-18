import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import userAvatarReducer from './userAvatar/userAvatar.reducer';
import sidebarReducer from './sidebar/sidebar.reducer'

export default combineReducers({
    user: userReducer,
    userAvatar: userAvatarReducer,
    sidbar: sidebarReducer

});