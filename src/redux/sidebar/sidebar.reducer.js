import sidebarActionTypes from './sidebar.actionTypes';

const INITIAL_STATE = {
    open: true
}

const sidebarReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case sidebarActionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                open: !state.open
            }
        default:
            return state;
    }
}

export default sidebarReducer 