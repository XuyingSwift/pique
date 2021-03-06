import React from 'react';
import { connect } from 'react-redux';
import { setOrientation } from '../../../redux/piquetreeform/piquetreefrom.actions';
import EditorButton from '../editorButton/EditorButton.component';

const Orientation = ({setOrientation, orientations}) =>{
    return (
        <div>
            {orientations.map((p, i) => <EditorButton key={i} onClick={() => {setOrientation(p.value)}}>{p.label}</EditorButton>)}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setOrientation: data => dispatch(setOrientation(data))
})

export default connect(null, mapDispatchToProps)(Orientation)
