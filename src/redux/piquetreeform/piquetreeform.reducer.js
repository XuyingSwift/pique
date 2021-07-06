import {PIQUE_DATA} from "./piqueData";
import PiqueTreeFormActionTypes from './piquetreeform.actionTypes'

const INITIAL_STATE = {
  projects: PIQUE_DATA,
  tree: null,
  projectName: '',
  riskLevel: '',
  nodeSize: {
    x: 200,
    y: 200
  },
  orientation: '',
  collapseNeighbornodes: false,
  uploadFile: null

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
    case PiqueTreeFormActionTypes.SET_RISK_LEVEL:
              return {
                  ...state,
                  riskLevel: action.payload
              }
    case PiqueTreeFormActionTypes.SET_NODE_SIZE:
      return {
        ...state,
        nodeSize: action.payload
      }
      case PiqueTreeFormActionTypes.SET_ORIENTATION:
        return {
          ...state,
          orientation: action.payload
        }
    case PiqueTreeFormActionTypes.SET_NEIGHBOR_NODES:
      return {
        ...state,
        collapseNeighbornodes: !state.collapseNeighbornodes
      }
    case PiqueTreeFormActionTypes.SET_UPLOAD_FILE:
      return {
        ...state,
        uploadFile: action.payload
      }
    default:
      return state;
  }
};

export default PiqueReducer;