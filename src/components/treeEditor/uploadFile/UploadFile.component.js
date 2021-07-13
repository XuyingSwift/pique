import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFileName } from '../../../redux/piquetreeform/piquetreeform.selector';
import { setFileName, setLoadFinished, setUploadFile } from '../../../redux/piquetreeform/piquetreefrom.actions';
import {Input} from './UploadFile.styles'
import { uploadAFile } from '../../../firebase/firebase.utils';
const UploadFile = ({fileName, setFileName, setUploadFile}) => {
     const [isFilePicked, setIsFilePicked] = React.useState(false);


     const handleChange = e => {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      const name = e.target.files[0].name;
      fileReader.onload = e => {
        console.log("e.target.result", e.target.result);
        setFileName(name)
        setUploadFile(JSON.parse(e.target.result));
        uploadAFile("raws",name, JSON.parse(e.target.result));
        setIsFilePicked(true);
      };
      alert("uploaded!")
    };
    return (
      <div>
        <Input type="file" accept=".json" onInput={handleChange}/>
        {isFilePicked ? (
            <p>FileName: "{fileName}" is selected</p>
        ) : null}
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
    fileName: selectFileName,
})
const mapDispatchToProps = dispatch => ({
    setUploadFile: (file) => dispatch(setUploadFile(file)),
    setFileName: (name) => dispatch(setFileName(name)),
    setLoadFinished: (data) => dispatch(setLoadFinished(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(UploadFile)
