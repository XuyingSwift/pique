import TreeVi from './TreeVi.compoent'
import React from 'react';
import ProjectForm from '../../components/projectForm/ProjectForm.compoent';
import Editor from '../../components/projectForm/Editor.component';
import * as s from './PiqueTreePage.styles'
import { createStructuredSelector } from 'reselect';
import { selectProjectName, selectRiskLevel } from '../../redux/piquetreeform/piquetreeform.selector';
import {connect} from 'react-redux';

const PiqueTreePage = ({projectName, riskLevel}) =>{
    const [show, setShow] = React.useState(false);

    return (
        <s.Grid isOpen={show}>
        <s.TreeEditor><Editor/></s.TreeEditor>
        <s.TreeView>
            <button onClick={() => setShow(!show)}>
                {show ? "Close Editor" : "Open Editor"}
           </button>
           {
               projectName ? <TreeVi projectName={projectName} riskLevel={riskLevel}/> : null
           }
        </s.TreeView>           
        </s.Grid>
    )
}

const mapStateToProps = createStructuredSelector({
    projectName: selectProjectName,
    riskLevel: selectRiskLevel
})

export default connect(mapStateToProps)(PiqueTreePage);