import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firstFormData, nextStep } from '../Actions/index';


function FirstStep() {
    const formData = useSelector(state => state.formReducer)
    const dispatch = useDispatch(); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

    //const [mainData, setMainData] = useState([]);
    const newData = {name:name, email:email, number:number, password:password};
    let namError = "";
    // let error = "";
    function validateFrom() {
        if (name.length<3) {
            namError = "Ok";
            return formData.hasOwnProperty('1');
        } else {
            namError = "NAME  is too short";
            
        }
        
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(number) && !number.length<9) {
           // return formData.hasOwnProperty('1');
        } else {
            
            return formData.hasOwnProperty('1');
        }

        if (password.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            
        } else {
            return formData.hasOwnProperty('1');
        }

        return formData.hasOwnProperty('0');
    }
    
    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData['0'].name);
    }
    


    return (
        <div>
            <div className="card my-5 mx-5 w-75">
                <h5 className="card-header">Primary Details</h5>
                <div className="card-body my-2 mx-2">
                    <form action='' onSubmit={submitForm} method="psot">
                        <div className="form-group col-md-6">
                            <label htmlFor="fullname">Full Name</label> <span style={{color:name.length<3?"red":"green"}}>{name.length===0?"":name.length<3?":Your name length is too short":": ✓"}</span>
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control " id="fullname"  /> 
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email address</label>
                            <input type="email" value={email}  required onChange={(e)=>setEmail(e.target.value)} className="form-control " id="email"  />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="phone ">Phone Number</label> <span style={{color:number.length<10?"red":"green"}}>{number.length===0?"":/^-?[\d.]+(?:e-?\d+)?$/.test(number) && !number.length<10?":10 digit..":"Please enter only number 10 digit "}</span>
                            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} className="form-control" id="phone" pattern={/^(\+\d{1,3}[- ]?)?\d{10}$/} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="password">Password</label>
                             <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control " id="password" pattern={/^[a-zA-Z0-9!@#$%^&*]{6,16}$/} required/>
                        </div>
                        <button type='submit' className="btn btn-primary my-2 float-start"
                         onClick={()=> dispatch(firstFormData(newData))} disabled={validateFrom()?true:false}>Save Form</button>
                         <button type='submit' className="btn btn-success my-2 float-end "
                         onClick={(e)=>  dispatch(nextStep(2),  e.preventDefault())} disabled={validateFrom()?false:true}>Next</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default FirstStep
