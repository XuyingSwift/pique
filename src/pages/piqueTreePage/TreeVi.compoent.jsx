import React from 'react';
import { useCenteredTree } from './helper.utils'
import Tree from "react-d3-tree";
import cerl from './output.json'
import * as s from '../../components/colors/colors.js'

const containerStyles = {
    width: "100vw",
    height: "100vh"
  };
  const nodeRiskColor1 = (score, riskLevel) => {
   
    const newScore = Number(score)
     if (newScore < 0.3 && riskLevel === s.Red.name){
       return {border: "1px solid black", backgroundColor: s.Red.value}
     } else if ( 0.3 <= newScore <0.5  && riskLevel === s.DarkRed.name){
       return {border: "1px solid black", backgroundColor: s.DarkRed.value}
     }
     else if ( 0.5 <= newScore <0.7   && riskLevel === s.Yellow.name) {
      return {border: "1px solid black", backgroundColor: s.Yellow.value}
    }else if ( 0.7 <=newScore <=1.0  && riskLevel === s.Green.name) {
      return {border: "1px solid black", backgroundColor: s.Green.value}
    }else{
      return {border: "1px solid black", backgroundColor: "grey"}
    }
  }

  // change the coloe of the tree
  const nodeRiskColor = (score, riskLevel) => {
    const num = Number(score);
    if (num <= 0.3 && riskLevel === s.Red.name) {
      return {border: "1px solid black", backgroundColor: s.Red.value}
    } else if ( num > 0.3 && num <= 0.5 && riskLevel === s.DarkRed.name) {
      return {border: "1px solid black", backgroundColor: s.DarkRed.value}
    } else if ( num > 0.5 && num <= 0.7 && riskLevel === s.Yellow.name) {
      return {border: "1px solid black", backgroundColor: s.Yellow.value}
    } else if ( num > 0.7 && num <= 1.0 && riskLevel === s.Green.name) {
      return {border: "1px solid black", backgroundColor: s.Green.value}
    } else {
      return {border: "1px solid black", backgroundColor: "grey"}
    }
  }
  


  // Here we're using `renderCustomNodeElement` to represent each node
  // as an SVG `rect` instead of the default `circle`.
  const renderForeignObjectNode = ({ nodeDatum, toggleNode, foreignObjectProps, riskLevel}) => (
    <g>
      <circle r={15}></circle>
      <foreignObject {...foreignObjectProps}>
      <div style={ nodeRiskColor(nodeDatum.value, riskLevel)}>
      <h3 style={{ textAlign: "center" }}>{"name: " + nodeDatum.name}</h3>
      <h3 style={{ textAlign: "center" }}>{"value: " + nodeDatum.value}</h3>
      {nodeDatum.children && (
        <button style={{ width: "100%", backgroundColor: "#B9B7BD"}} onClick={toggleNode}>
          {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
        </button>
      )}
    </div>

      </foreignObject>
    </g>
  );


  

  
const TreeVi = ({riskLevel}) => {
    const [translate, containerRef] = useCenteredTree();
    const nodeSize = { x: 200, y: 200 };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };
    //const {projectName, json} = projects
    //console.log(json)
    return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={cerl}
        translate={translate}
       
        orientation="vertical"
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, riskLevel})
        }
      />
    </div>
    )
}


export default TreeVi;