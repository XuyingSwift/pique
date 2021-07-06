import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {uploadAFile } from '../../../firebase/firebase.utils';
import { selectUploadFile } from '../../../redux/piquetreeform/piquetreeform.selector';
import { setUploadFile } from '../../../redux/piquetreeform/piquetreefrom.actions';
import {Input} from './UploadFile.styles'

const UploadFile = ({uploadFile, setUploadFile}) => {
     const [isFilePicked, setIsFilePicked] = React.useState(false);
     const handleChange = e => {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        console.log("e.target.result", e.target.result);
        setUploadFile(JSON.parse(e.target.result));
        uploadAFile("rawPiqueJsons",JSON.parse(e.target.result));
        setIsFilePicked(true);
      };
      alert("uploaded!")
    };
    return (
      <div>
        <Input type="file" accept=".json" onInput={handleChange}/>
        {isFilePicked ? (
            <p>FileName: "{uploadFile.name}" is selected</p>
        ) : null}
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
    uploadFile : selectUploadFile
})
const mapDispatchToProps = dispatch => ({
    setUploadFile: (file) => dispatch(setUploadFile(file))
})
export default connect(mapStateToProps, mapDispatchToProps)(UploadFile)
