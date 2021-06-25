import { createSelector } from "reselect";

const selectPiquetreeForm = state => state.piquetreeForm;

export const selectProjectName = createSelector(
    [selectPiquetreeForm],
    piquetreeForm => piquetreeForm.projectName
)

export const selectRiskLevel = createSelector(
    [selectPiquetreeForm],
    piquetreeForm => piquetreeForm.riskLevel
)
