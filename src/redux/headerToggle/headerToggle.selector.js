import { createSelector } from "reselect";

const SelectHeader = state => state.headerToggle;

export const SelectHeaderToggle = createSelector(
    [SelectHeader],
    headerToggle => headerToggle.toggle
)