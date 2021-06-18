import TreeVi from './TreeVi.compoent'
import React from 'react';
import ProjectForm from '../../components/projectForm/ProjectForm.compoent';
import * as s from './PiqueTreePage.styles'

const PiqueTreePage = () =>{
    const [show, setShow] = React.useState(false);

    return (
        <s.Grid isOpen={show}>
        <s.TreeEditor><ProjectForm/></s.TreeEditor>
        <s.TreeView>
            <button onClick={() => setShow(!show)}>
                {show ? "Close Editor" : "Open Editor"}
           </button>
           <TreeVi/>
        </s.TreeView>           
        </s.Grid>
    )
}

export default PiqueTreePage;