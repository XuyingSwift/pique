import {PIQUE_DATA} from "./piqueData";
import PiqueTreeFormActionTypes from './piquetreeform.actionTypes'

const INITIAL_STATE = {
  projects: PIQUE_DATA,
  tree: null,
  projectName: ''
};

const PiqueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PiqueTreeFormActionTypes.SET_PIQUE_TREE:
        return {
            ...state,
            tree: action.payload
        }
        case PiqueTreeFormActionTypes.SET_PROJECT_NAME:
            return {
                ...state,
                projectName: action.payload
            }
    default:
      return state;
  }
};

export default PiqueReducer;