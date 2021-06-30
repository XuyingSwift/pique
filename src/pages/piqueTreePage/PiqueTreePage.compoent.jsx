import React from 'react';
import * as s from './PiqueTreePage.styles'
import { createStructuredSelector } from 'reselect';
import {selectProjectName, selectProjects, selectProjectsForTree} from '../../redux/piquetreeform/piquetreeform.selector';
import {connect} from 'react-redux';
import TreeEditor from '../../components/treeEditor/TreeEditor.component'
import { setPiqueTree, setProjectName } from '../../redux/piquetreeform/piquetreefrom.actions';
class PiqueTreePage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          show: false
        };
      }
      
      /*componentDidMount() {
        const {fetchProjectsStartAsync} = this.props;
  
        fetchProjectsStartAsync();
      }*/

      handleShow = () => {
          this.setState({show: !this.state.show})
      }

  
    render() {
        const {projects, projectName, setPiqueTree} = this.props
        return (
            <s.Grid isOpen={this.state.show}>
            <s.TreeEditor><TreeEditor/></s.TreeEditor>
            <s.TreeView>
                <button onClick={this.handleShow}>
                    {this.state.show ? "Close Editor" : "Open Editor"}
               </button>
              
              
                

            </s.TreeView>
            
            </s.Grid>
        )
    }
}

const mapStateToProps = createStructuredSelector({
  projects: selectProjectsForTree,
  projectName: selectProjectName
})

const mapDispatchToProps = dispatch => ({
  setPiqueTree: data => dispatch(setPiqueTree(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(PiqueTreePage);