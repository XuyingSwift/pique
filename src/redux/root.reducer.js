import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import userAvatarReducer from './userAvatar/userAvatar.reducer';
import HeaderToggleReducer from './headerToggle/headerToggle.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import PiqueReducer from './piquetreeform/piquetreeform.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    userAvatar: userAvatarReducer,
    headerToggle: HeaderToggleReducer,
    pique: PiqueReducer
});

export default persistReducer(persistConfig, rootReducer);