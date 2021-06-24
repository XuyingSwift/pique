import {createSelector} from 'reselect';

const SelectUserAvatar = state => state.userAvatar;

export const SelectUserAvatarHidden = createSelector(
    [SelectUserAvatar],
    userAvatar => userAvatar.hidden
)