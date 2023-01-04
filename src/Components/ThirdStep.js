import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, thirdFormData } from '../Actions'

function ThirdStep() {

    // const step = useSelector(state => state.data);
    const formData = useSelector(state => state.formReducer)
    const dispatch = useDispatch();

    const [qulification, setQulification] = useState('')
    const [file, setFile] = useState('');
    const [identity, setIdentity] = useState('');
    const [identityFile, setIdentityFile] = useState('');
    const [photoFile, setPhotoFile] = useState('');
    const newData = { qulification: qulification, file: file, identity: identity, identityFile: identityFile, photoFile: photoFile };

    var errorShow = '';
    var validExt = ".png, .pdf, .jpeg, .jpg";
    const fileExtValidate = (file) => {
        var filePath = file;
        
        var getFileExt = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();
        var pos = validExt.indexOf(getFileExt);
        if (pos < 0) {
            errorShow = ("This file is not allowed, please upload valid file.");
            return false;
        } else {
            return true;
        }
    }

    var maxSize = '1024';
    function fileSizeValidate(fdata) {
        if (fdata.files && fdata.files[0]) {
            var fsize = fdata.files[0].size / 1024;
            if (fsize > maxSize) {
                errorShow = ('Maximum file size exceed, This file size is: ' + fsize + "KB");
                return false;
            } else {
                return true;
            }
        }
    }

    function validateFrom() {
        if (file) {
            fileExtValidate(file);
        fileSizeValidate(file);
        } else if(identityFile) {
            fileExtValidate(identityFile);
        fileSizeValidate(identityFile);
        }
        
        return formData.hasOwnProperty('2');
    }

    return (
        <div>
            <div className="card my-5 mx-5 w-75">
                <h5 className="card-header">Upload Documents</h5>
                <form action='' >
                    <div className="card-body">
                        <div className="form-group ">
                            <label htmlFor="fullname">Enter Last Qulification</label> <span>{errorShow}</span>
                            <input type="text" value={qulification} onChange={(e) => setQulification(e.target.value)} className="form-control" placeholder='Enter last Qulification Name' id="fullname" required />
                            <div className="input-group mb-3">
                                <input type="file" value={file} onChange={(e) => setFile(e.target.value)} className="form-control" id="inputGroupFile02" placeholder='Upload .jpg or .pdg file' />
                                <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                            </div>

                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                            <select className="form-select" type='select' onChange={(e) => setIdentity(e.target.value)} id="inputGroupSelect01">
                                <option >Choose Your Identity</option>
                                <option value="Aadhar">Aadhar</option>
                                <option value="Pan">Pan</option>
                                <option value="Driving">Driving licence</option>
                            </select>
                            <div className="input-group mb-3">
                                <input type="file" className="form-control" value={identityFile} onChange={(e) => setIdentityFile(e.target.value)} id="inputGroupFile02" />
                                <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                            </div>

                        </div>
                        <div className="form-group ">
                            <label htmlFor="fullname">Uploade Your Passport Size Photo</label>
                            <div className="input-group mb-3">
                                <input type="file" value={photoFile} onChange={(e) => setPhotoFile(e.targetvalue)} className="form-control" id="inputGroupFile02" />
                                <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                            </div>
                            {/* <img src={} className="img-thumbnail" alt="..."></img> */}
                        </div>

                        <button type='submit' className="btn btn-primary my-2 float-start" onClick={() => dispatch(thirdFormData(newData))} disabled={validateFrom() ? true : false} >Save Form</button>
                        <button className="btn btn-success my-2 float-end"
                            onClick={(e) => dispatch(nextStep(4), e.preventDefault())} disabled={validateFrom() ? false : true} >Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ThirdStep