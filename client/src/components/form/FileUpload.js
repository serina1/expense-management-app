import React, { Fragment, useState } from 'react';
import axios from 'axios';
console.log('connected')
const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    console.log('onsubmit');
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
       
      });
      

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      console.log('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
  };


  return (
    <React.Fragment>
      <form>
        <div className="custom-file mb-4">
          <input type="file" className="custom-file-input" id="customFile" onChange = {onChange}/>
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <input 
        type ="submit"
         value="Upload"
         className= "btn btn-primary btn-bloack mt-4"/>
      </form>
    </React.Fragment>
  );
};

export default FileUpload;
