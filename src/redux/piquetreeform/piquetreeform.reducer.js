import PiqueTreeFormActionTypes from "./piquetreeform.actionTypes";
const INITIAL_STATE = {
    projectName: ['CERL C# Pique Model', 'Pique Binary Model'],
    riskLevel: ['Dark Red', 'Red', 'Yellow', 'Green'],
    porjects: null
}

const PiquetreeFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PiqueTreeFormActionTypes.UPDATE_PROJECTS:
            return{
                ...state,
                projects: action.payload
            }
        default:
            return state;
    }
}

export default PiquetreeFormReducer;