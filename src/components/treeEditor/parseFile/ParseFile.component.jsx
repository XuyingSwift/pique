import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectFileName } from '../../../redux/piquetreeform/piquetreeform.selector';
import EditorButton from '../editorButton/EditorButton.component';
import {connect} from 'react-redux'
import { setPiqueTree, setProjectName } from '../../../redux/piquetreeform/piquetreefrom.actions';
import { getParsedModel } from '../../../firebase/firebase.utils';


class ParseFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            loadingfinish: false,
            parsedFile: null
        }
    }

  componentDidMount() {
        const {fileName} = this.props;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        }
        if (fileName != '') {
          fetch(`http://localhost:8080/parsePique?name=${fileName}`, requestOptions)
            .then(data => {console.log('sucess', data)})
            .catch((e) => {console.error("error from fetch data", e)})
        }

        const data = getParsedModel(fileName);
        console.log("getting data", data)

        this.setState({parsedFile: data})
    }

    render() {
        const {isLoading, parsedFile} = this.state;
        const {fileName, setPiqueTree, setProjectName} = this.props;
        return(
            <EditorButton onClick={()=>{setPiqueTree(parsedFile), setProjectName(fileName)}}>parse and show {fileName}</EditorButton>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    fileName: selectFileName,
})

const mapDispatchToProps = dispatch => ({
    setPiqueTree: data => dispatch(setPiqueTree(data)),
    setProjectName: data => dispatch(setProjectName(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ParseFile);