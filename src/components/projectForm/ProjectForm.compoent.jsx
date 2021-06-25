import React from 'react';
import * as s from './ProjectForm.styles';
import CustomButton from '../../components/customButton/CustomButtom.component'
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectProjectsForPiqueTree, selectRiskLevel} from '../../redux/piquetreeform/piquetreeform.selector'
import {updateProjects} from '../../redux/piquetreeform/piquetreefrom.actions';
import {convertProjectsSnapshotToMap, firestore} from '../../firebase/firebase.utils';

class ProjectForm extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const {updateProjects} = this.props;
    const projectRef = firestore.collection('projects');

    projectRef.get().then(
      snapshot => {
        const projectMap = convertProjectsSnapshotToMap(snapshot);
        updateProjects(projectMap);
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const {projects, riskLevels} = this.props;
    return(
      <s.Container>         
          <s.Span>Pick a project that you want to visualize</s.Span>
          <s.Select>
            <option value="" hidden>
              Project Name
            </option>
            {
              projects.map((project, index) => <option value={index} onClick={() => {}}>{project.projectName}</option>)
            }
          </s.Select>
        
          <s.Span>Show different risk level of each node</s.Span>
          <s.Select>
            <option value="" hidden>
              Risk Levels
            </option>
            {
              riskLevels.map((riskLevel, index) => <option value={index}>{riskLevel}</option>)
            }
          </s.Select>

          <s.Span>Select the Quality Aspect you want to see</s.Span>
          <s.Select>
            <option value="" hidden>
            Qaulity Aspect
            </option>
            <option value="Availability">Availability</option>
            <option value="Authenticity">Authenticity</option>
            <option value="Authorization">Authorization</option>
            <option value="Confientiality">Confientiality</option>
            <option value="Non-repudiation">Non-repudiation</option>
            <option value="Integrity">Integrity</option>
          </s.Select>
          
          <s.Span>Select the Product Factor you want to see</s.Span>
          <s.Select>
          <option value="" hidden>
           Profuct Factors
          </option>
          <option value="Availability">Availability</option>
          <option value="Authenticity">Authenticity</option>
          <option value="Authorization">Authorization</option>
          <option value="Confientiality">Confientiality</option>
          <option value="Non-repudiation">Non-repudiation</option>
          <option value="Integrity">Integrity</option>
        </s.Select>

        <s.ButtonGroupContainer>
          <CustomButton>Submit</CustomButton>
        </s.ButtonGroupContainer>
    </s.Container>
  )
  }
}

const mapStateToProps = createStructuredSelector({
   projects: selectProjectsForPiqueTree,
   riskLevels: selectRiskLevel
});

const mapDispatchToProps = (dispatch) => ({
  updateProjects: (projectMap) => dispatch(updateProjects(projectMap))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);