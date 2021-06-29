import { firestore, convertProjectsSnapshotToMap} from '../../firebase/firebase.utils';
import PiqueTreeFormActionTypes from './piquetreeform.actionTypes';
import PiqueTreeActionTypes from './piquetreeform.actionTypes';

export const updateProjects = (projectMap) => ({
    type: PiqueTreeActionTypes.UPDATE_PROJECTS,
    payload: projectMap
});

export const setProjectName = (projectName) => ({
    type: PiqueTreeActionTypes.SET_PROJECT_NAME,
    payload: projectName
})

export const setRiskLevel = (riskLevel) => ({
    type: PiqueTreeActionTypes.SET_RISK_LEVEL,
    payload: riskLevel
})

export const setSelected = (selected) => ({
    type: PiqueTreeActionTypes.SET_SELECTED,
    payload: selected
});

export const fetchProjectsStart = () => ({
    type: PiqueTreeActionTypes.FETCH_PROJECTS_START
});

export const fetchProjectsSuccess = projectMap => ({
    type: PiqueTreeActionTypes.FETCH_PROJECTS_SUCCESS,
    payload: projectMap
});

export const fetchProjectsFailure = errorMessage => ({
    type: PiqueTreeActionTypes.FETCH_PROJECTS_FAILURE,
    payload: errorMessage
});

export const fetchProjectsStartAsync = () => {
    return dispatch => {
        const projectRef = firestore.collection('projects');
        dispatch(fetchProjectsStart());

        projectRef.get()
        .then(
            snapshot => {
                const projectMap = convertProjectsSnapshotToMap(snapshot);
                dispatch(fetchProjectsSuccess(projectMap));
            }
        ).catch(error => dispatch(fetchProjectsFailure(error.message)))
    }
}

export const setPiqueTree = (data) => ({
    type: PiqueTreeFormActionTypes.SET_PIQUE_TREE,
    payload: data
})