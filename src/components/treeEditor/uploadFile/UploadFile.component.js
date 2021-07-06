import React from 'react';
import {uploadAFile } from '../../../firebase/firebase.utils';
import {Input} from './UploadFile.styles'
const UploadFile = () => {
     const handleChange = e => {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        console.log("e.target.result", e.target.result);
        uploadAFile("rawPiqueJsons",JSON.parse(e.target.result))
      };
      alert("uploaded!")
      
    
    };
    return (
      <div>
        <Input type="file" onChange={handleChange}/>
      </div>
    )
}

export default UploadFile;
