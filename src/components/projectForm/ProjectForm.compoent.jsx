import React from 'react';
import * as s from './ProjectForm.styles';
import CustomButton from '../../components/customButton/CustomButtom.component'
const ProjectForm = () => {

  
    return(
        <s.Container>         
            <s.Span>Pick a project that you want to visualize</s.Span>
            <s.Select>
              <option value="" hidden>
                Project Name
              </option>
              <option value="1">CERL C# Repository</option>
              <option value="2">Pique Bin Project</option>   
            </s.Select>
          
            
        
             
        
          <s.Select>
            <option value="" hidden>
              Data Visualization Type
            </option>
            <option value="1">Line Chart</option>
            <option value="2">Bar Chart</option>
            <option value="3">Tree Chart</option>
          </s.Select>
          <s.Span>Show different risk level of each node</s.Span>
          <s.Select>
            <option value="" hidden>
              Risk Levels
            </option>
            <option value="darkRed">Dark Red</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
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

export default ProjectForm;