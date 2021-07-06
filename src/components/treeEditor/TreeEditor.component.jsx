import React from 'react';
import * as s from './TreeEditor.styles'
import ProjectSelectComponent from './projectSelect/ProjectSelect.component';
import RiskLevelSelectComponent from './riskLevelSelect/RiskLevelSelect.component';
import Orientation from './orientation/Orientation.component';
import CollapseNeighbornodes from './collapseNeighbornodes/CollapseNeighbornodes.component';
import UploadFile from './uploadFile/UploadFile.component';
const TreeEditor = () => {
    const riskLevelOptions = [
        {
            label: "Dark Red",
            value: "dark red"
        },
        {
            label: "Red",
            value: "red"
        },
        {
            label: "Yellow",
            value: "yellow",
        },
        {
            label: "Green",
            value: "green"
        },
        {
            label: "All Color",
            value: ''
        }    
    ]
    const orientations = [
        {
            label: "Horizontal",
            value: "horizontal"
        },
        {
            label: "Vertical",
            value: "Vertical"
        }
    ]
    return (
        <s.Container>
            <s.Span>Upload Your Pique Model</s.Span>
            <UploadFile/>
            <s.Span>Pick An Exisiting Project to Visualize</s.Span>
            <ProjectSelectComponent/>
            <s.Span>Pick a Risk Level</s.Span>
            <RiskLevelSelectComponent riskLevelOptions={riskLevelOptions}/>
            <s.Span>Select Orientation</s.Span>
            <Orientation orientations={orientations}/>
            <s.Span>Collapse Same Level Nodes</s.Span>
            <CollapseNeighbornodes/>
        </s.Container>
    )
}

export default TreeEditor;