import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { finalFormData, nextStep } from '../Actions';

function DisplayForm() {

    
    const formData = useSelector(state => state.formReducer)
    const dispatch = useDispatch();
    const data = Object.assign({}, ...formData);
    console.log(data.name);
    
    // const newData = { };

    const [agrrement, setAgrrement] = useState();
    

    return (
        <div>
            <div className="card my-5 mx-5 w-75">
                <h5 className="card-header">Your Form & Declearation</h5>
                <form >
                    <div className="card-body my-2 mx-2">
                        <table>
                            <thead>
                                <tr><th>Name :</th><td>{data.name}</td></tr>
                                <tr><th>Email :</th><td>{data.email}</td></tr>
                                <tr><th>Mobile No. :</th><td>{data.number}</td></tr>
                                <tr><th>Address :</th><td>{data.address1}</td></tr>
                                <tr><th>Address2 :</th><td>{data.address2}</td></tr>
                                <tr><th>City :</th><td>{data.city}</td></tr>
                                <tr><th>Zip :</th><td>{data.zip}</td></tr>
                                <tr><th>Married :</th><td>{data.married}</td></tr>
                                <tr><th>Gender :</th><td>{data.gender}</td></tr>
                                <tr><th>Birthday :</th><td>{data.birth}</td></tr>
                                <tr><th>Last Qulification :</th><td>{data.qulification}</td></tr>
                                <tr><th>Qulification file :</th><td><img src={data.file} className="img-thumbnail" alt="..."></img></td></tr>
                                 
                                <tr><th>Identity :</th><td>{data.identity}</td></tr>
                                <tr><th>Identity Image :</th><td><img src={data.identityFile} className="img-thumbnail" alt="..."></img></td></tr>
                                <tr><th>Passpot Image :</th><td><img src={data.photoFile} className="img-thumbnail" alt="..."></img></td></tr>
                            </thead>
                        </table>
                       
                        <div className="d-flex position-relative">

                            <div>
                                <p className='border'>For a declaration statement to be true, correct information must be placed. This may depend on what the information is asked, but the information has to be true to the knowledge of the author.</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value='Agree with T&C' onChange={(e) => setAgrrement(e.target.value)} id="gridCheck" />
                                    <label>Agree with T&C</label>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className="btn btn-primary my-2 float-start" onClick={() => dispatch(finalFormData(agrrement))} disabled={formData.hasOwnProperty('3')?true:false} >Save Form</button>
                        <button type='submit' className="btn btn-success my-2 float-end" onClick={(e) => dispatch(nextStep(5), e.preventDefault())} disabled={formData.hasOwnProperty('3')?false:true} >Final Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DisplayForm