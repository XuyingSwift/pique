import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProjectName, selectProjects } from '../../redux/piquetreeform/piquetreeform.selector';
import { setPiqueTree, setProjectName } from '../../redux/piquetreeform/piquetreefrom.actions';

const ProjectSelect= ({projects, projectName, setProjectName, setPiqueTree}) => {

    const handleChange = e => {
        setProjectName(e.target.value);    }
    return (
        <div>
            <form>
                <select value={projectName} onChange={handleChange} >
                    <option value="" hidden>
                        Project Name
                    </option>
                    {projects.map((p, i) => <option key={i}> {p.projectName}</option>)}
                </select>
            </form>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    projectName: selectProjectName
})

const mapDispatchToProps = (dispatch) => ({
    setProjectName: (data) => dispatch(setProjectName(data)),
    setPiqueTree: (data) => dispatch(setPiqueTree(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProjectSelect)