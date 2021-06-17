import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import userAvatarReducer from './userAvatar/userAvatar.reducer';

export default combineReducers({
    user: userReducer,
    userAvatar: userAvatarReducer
});