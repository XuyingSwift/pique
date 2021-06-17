import React from 'react';
import { useCenteredTree } from './helper.utils'
import Tree from "react-d3-tree";
import cerl from './output.json'


const containerStyles = {
    width: "100vw",
    height: "100vh"
  };
  
  // define and style the path function into the tree
  /*const straightPathFunc = (linkDatum, orientation) => {
      const { source, target } = linkDatum;
      return orientation === 'horizontal'
        ? `M${source.y},${source.x}L${target.y},${target.x}`
        : `M${source.x},${source.y}L${target.x},${target.y}`;
    };*/

  // Here we're using `renderCustomNodeElement` to represent each node
  // as an SVG `rect` instead of the default `circle`.
  const renderForeignObjectNode = ({ nodeDatum, toggleNode, foreignObjectProps}) => (
    <g>
      <circle r={15}></circle>
      <foreignObject {...foreignObjectProps}>
      <div style={  (nodeDatum.value > 0.3  && nodeDatum.value !== '' )? { border: "1px solid black",  backgroundColor: "#EEEDE7" } : {border: "1px solid black",  backgroundColor: "red"}
        
        }>
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


  
const TreeVi = () => {
    const [translate, containerRef] = useCenteredTree();
    const nodeSize = { x: 200, y: 200 };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };
    return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={cerl}
        translate={translate}
       
        orientation="vertical"
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
      />
    </div>
    )
}

export default TreeVi;