import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectProjectName, selectProjectsFetching , selectProjectsForPiqueTree, selectRiskLevel} from '../../redux/piquetreeform/piquetreeform.selector';
import {setProjectName, setRiskLevel, fetchProjectsStart, fetchProjectsStartAsync, setPiqueTree} from '../../redux/piquetreeform/piquetreefrom.actions';

import CustomButton from '../customButton/CustomButtom.component';
import ProjectSelect from './projectSelect.component';
import * as s from './ProjectForm.styles'
import RiskLevelSelect from './riskLevelSelect.component';

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
    }

]
class Editor extends React.Component{

    componentDidMount() {
      const {fetchProjectsStartAsync} = this.props;

      fetchProjectsStartAsync();
    }
  
    handleChange = event => {
      setProjectName(event.target.value)
    }
    render() {
       
          const {isProjectsFetching, projects, riskLevels, setPiqueTree, setProjectName, selectedName} = this.props;

          return(
            <div>
              <ProjectSelect projects={projects}/>
              <RiskLevelSelect options={riskLevelOptions}/>
              
            </div>
          )  
    }
}

const mapStateToProps = createStructuredSelector({
  isProjectsFetching: selectProjectsFetching,
  projects: selectProjectsForPiqueTree,
  riskLevels: selectRiskLevel,
  selectedName: selectProjectName
})
const mapDispatchToProps = (dispatch) => ({
   fetchProjectsStartAsync: () => dispatch(fetchProjectsStartAsync()),
   setPiqueTree: (data) => dispatch(setPiqueTree(data)),
   setProjectName: (name) => dispatch(setProjectName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor);