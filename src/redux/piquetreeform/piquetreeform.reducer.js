import PiqueTreeFormActionTypes from "./piquetreeform.actionTypes";
const INITIAL_STATE = {
    projectName: '',
    riskLevels: ['Dark Red', 'Red', 'Yellow', 'Green'],
    riskLevel: '',
    porjects: null,
    select: {
        projectName: '',
        riskLevel: '',
    },

    isFetching: false,
    errorMessage: undefined,
    piqueTree: ''
}

const PiquetreeFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PiqueTreeFormActionTypes.UPDATE_PROJECTS:
            return{
                ...state,
                projects: action.payload
            }
        case PiqueTreeFormActionTypes.SET_PROJECT_NAME:
            return {
                ...state,
                projectName: action.payload
            }
        case PiqueTreeFormActionTypes.SET_RISK_LEVEL:
            return {
                ...state,
                riskLevel: action.payload
            }
        case PiqueTreeFormActionTypes.SET_SELECTED:
            return {
                ...state,
                selected: action.payload
            }

        case PiqueTreeFormActionTypes.FETCH_PROJECTS_START:
            return {
                ...state,
                isFetching: true
            }
        
        case PiqueTreeFormActionTypes.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                projects: action.payload
            }
        case PiqueTreeFormActionTypes.FETCH_PROJECTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        case PiqueTreeFormActionTypes.SET_PIQUE_TREE:
            return{
                ...state,
                piqueTree: action.payload
            }
        default:
            return state;
    }
}

export default PiquetreeFormReducer;