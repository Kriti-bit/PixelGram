import React from 'react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null); //We set the initial value of file to null
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0]; //In case a user uploads multiple files, we take only the first file

        if(selected && types.includes(selected.type)) { //Only if a file is selected and is of the allowed type, i.e. png and jpeg
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('Please select image of the type png or jpeg');
        }
    }

    return (
        <form>
            <input type="file" onChange = {changeHandler} />
            <div className="output">
                { error && <div className="error"> { error } </div> }
                { file && <div> { file.name } </div> }
                { file && <ProgressBar file={file} setFile = {setFile} /> }
            </div>
        </form>
    )

}

export default UploadForm;