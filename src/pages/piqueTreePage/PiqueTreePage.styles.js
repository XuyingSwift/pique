import styled from "styled-components";
import { Blue } from "../../components/colors/colors";
export const Grid = styled.div`
    grid-area: mainview;
    display: grid;
    grid-template-columns: 220px 1fr;
    grid-template-areas:
    "treeEditor treeView";
    height: 100vh;
`

export const TreeEditor = styled.div`
    grid-area: treeEditor;
    background-color: ${Blue};
`

export const TreeView = styled.div`
    grid-area: treeView;
    background-color: green;
`