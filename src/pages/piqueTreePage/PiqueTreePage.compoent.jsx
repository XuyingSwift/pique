import TreeVi from './TreeVi.compoent'
import React from 'react';
import ProjectForm from '../../components/projectForm/ProjectForm.compoent';
import * as s from './PiqueTreePage.styles'

const PiqueTreePage = () =>{
    return (
        <s.Grid>
            <s.TreeEditor/>
            <s.TreeView/>
        </s.Grid>
    )
}

export default PiqueTreePage;