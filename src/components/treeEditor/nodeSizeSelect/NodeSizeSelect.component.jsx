import { createStructuredSelector } from "reselect";
import { selectNodeSize } from "../../../redux/piquetreeform/piquetreeform.selector";
import { setNodeSize } from "../../../redux/piquetreeform/piquetreefrom.actions";
import React from 'react';
import { connect } from "react-redux";
const NodeSizeSelect = ({nodeSize, setNodeSize}) => {

    return (
       <div>
       <label>X</label>
       <input 
         
            type="number" 
            defaultValue={nodeSize.x}
            onChange={e => setNodeSize({ x: parseInt(!isNaN(e.target.value)), y:nodeSize.y })}
        />
       <label>Y</label>
       <input 
            type="number" 
            defaultValue={nodeSize.y}
            onChange={e => setNodeSize({ x: nodeSize.x, y: parseInt(!isNaN(e.target.value))})}
       />
       </div>
    )
}

const mapStateToProps = createStructuredSelector({
    nodeSize: selectNodeSize
})
const mapDispatchToProps = dispatch => ({
    setNodeSize: data => dispatch(setNodeSize(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(NodeSizeSelect)
