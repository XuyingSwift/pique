import React from 'react'
import { connect } from 'react-redux';
import { setNeighbornodes } from '../../../redux/piquetreeform/piquetreefrom.actions';
import EditorButton from '../editorButton/EditorButton.component';
const CollapseNeighbornodes = ({setNeighbornodes}) => {
    return (
        <div>
            <EditorButton onClick={() => {setNeighbornodes()}}>Collase Nodes</EditorButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setNeighbornodes: () => dispatch(setNeighbornodes())
})

export default connect(null, mapDispatchToProps)(CollapseNeighbornodes)