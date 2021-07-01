import React from 'react';
import {connect} from 'react-redux';
import { selectProjectName, selectProjectsForTree } from '../../../redux/piquetreeform/piquetreeform.selector';
import { setPiqueTree, setProjectName } from '../../../redux/piquetreeform/piquetreefrom.actions';
import { createStructuredSelector } from 'reselect';
import EditorButton from '../editorButton/EditorButton.component';
const ProjectSelect= ({projects, setProjectName, setPiqueTree}) => {
    return (
        <div>
            {projects.map((p, i) => <EditorButton key={i} onClick={() => {setProjectName(p.projectName); setPiqueTree(p.json)}}>{p.projectName}</EditorButton>)}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    projectName: selectProjectName,
    projects: selectProjectsForTree
})

const mapDispatchToProps = (dispatch) => ({
    setProjectName: (data) => dispatch(setProjectName(data)),
    setPiqueTree: (data) => dispatch(setPiqueTree(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProjectSelect)