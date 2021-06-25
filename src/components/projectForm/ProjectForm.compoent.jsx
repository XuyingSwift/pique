import React from 'react';
import * as s from './ProjectForm.styles';
import CustomButton from '../../components/customButton/CustomButtom.component'
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectProjectName, selectRiskLevel} from '../../redux/piquetreeform/piquetreeform.selector'

const ProjectForm = ({projectNames, riskLevels}) => {

    
    return(
        <s.Container>         
            <s.Span>Pick a project that you want to visualize</s.Span>
            <s.Select>
              <option value="" hidden>
                Project Name
              </option>
              {
                projectNames.map((project, index) => <option value={index}>{project}</option>)
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

const mapStateToProps = createStructuredSelector({
  projectNames: selectProjectName,
  riskLevels: selectRiskLevel
})

export default connect(mapStateToProps)(ProjectForm);