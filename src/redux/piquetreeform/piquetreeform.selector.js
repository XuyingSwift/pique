import { createSelector } from "reselect";

const pique = state => state.pique;

export const selectProjects = createSelector(
    [pique],
    pique => pique.projects
)
export const selectTree= createSelector(
    [pique],
    pique => pique.tree
)

export const selectProjectName= createSelector(
    [pique],
    pique => pique.projectName
)
export const selectProjectsForTree = createSelector(
    [selectProjects],
    projects => Object.keys(projects).map(key => projects[key])
  );