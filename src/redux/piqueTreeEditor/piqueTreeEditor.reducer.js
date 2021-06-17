import piqueTreeEditorActionTypes from "./piqueTreeEditor.actionTypes";

const INITIAL_STATE = {
    hidden: true
}

const piqueTreeEditorReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case piqueTreeEditorActionTypes.TOGGLE_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default piqueTreeEditorReducer;