import PiqueTreeActionTypes from './piquetreeform.actionTypes';

export const updateProjects = (projectMap) => ({
    type: PiqueTreeActionTypes.UPDATE_PROJECTS,
    payload: projectMap
});