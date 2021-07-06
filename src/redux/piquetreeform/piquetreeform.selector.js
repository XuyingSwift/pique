import { createSelector} from "reselect";

const pique = state => state.pique;

export const selectProjects = createSelector(
    [pique],
    pique => pique.projects
)

export const selectRiskLevel= createSelector(
    [pique],
    pique => pique.riskLevel
)

export const selectProjectName= createSelector(
    [pique],
    pique => pique.projectName
)
export const selectProjectsForTree = createSelector(
    [selectProjects],
    projects => Object.keys(projects).map(key => projects[key])
  );

export const selectTree= createSelector(
    [pique],
    pique => pique.tree
)

export const selectNodeSize= createSelector(
    [pique],
    pique => pique.nodeSize
)

export const selectOrientation = createSelector(
    [pique],
    pique => pique.orientation
)

export const selectCollpseNeighborNodes = createSelector(
    [pique],
    pique => pique.collapseNeighbornodes
)

export const selectUploadFile = createSelector(
    [pique],
    pique => pique.uploadFile
)