import userAvatarActionTypes from './userAvatar.actionTypes';

const INITIAL_STATE = {
    hidden: true
}

const userAvatarReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case userAvatarActionTypes.TOGGLE_USER_ICON_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default userAvatarReducer 