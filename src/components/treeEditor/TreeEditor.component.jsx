import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectProjectName, selectProjectsForTree , selectTree} from '../../redux/piquetreeform/piquetreeform.selector';
import {connect} from 'react-redux'
import {setProjectName, setPiqueTree} from '../../redux/piquetreeform/piquetreefrom.actions'
const TreeEditor = ({projectName, setProjectName, projects, setPiqueTree}) => {
    const handleChange = e => {
        setProjectName(e.target.value)
    }
    const findJson = (projects, projectName, setPiqueTree) => {
        projects.filter(p => p.projectName===projectName).map((p, i) => setPiqueTree(p.json)) 
      }

    return (
        <div>
            <select value={projectName} onChange={handleChange}>
                {projects.map((p, i) => <option key={i} value={p.projectName}>{p.projectName}</option>)}
            </select>
            <button onClick={findJson(projects, projectName, setPiqueTree)}>submit</button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    projects: selectProjectsForTree,
    tree: selectTree,
    projectName: selectProjectName
})

const mapDispatchToProps = dispatch => ({
    setProjectName: data => dispatch(setProjectName(data)),
    setPiqueTree: data => dispatch(setPiqueTree(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TreeEditor)