import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep,  secondFormData } from '../Actions/index'


function SecondStep() {
    const formData = useSelector(state => state.formReducer)
    
    const dispatch = useDispatch();
    //console.log("steep2 plus",step)
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [states, setState] = useState('');
    const [zip, setZip] = useState('');
    const [married, setMarried] = useState('');
    const [gender, setGender] = useState('');
    const [birth, setBirth] = useState('');
 
   // const [mainData, setMainData] = useState();
    const newData = {address1:address1, address2:address2, city:city, states:states, zip:zip, married:married,gender:gender, birth:birth};
    const submitForm = (e)=>{
        e.preventDefault();
         
       // setMainData(newData);
       // Array.prototype.push.apply(formData,newData);
        
        //localStorage.setItem('form2', JSON.stringify(mainData));
        
    }

    function validateFrom() {
        

        return formData.hasOwnProperty('1');
    }
    
   

    return (
            <div className="card my-5 mx-5 w-75">
                <h5 className="card-header">Details Information</h5>
                <div className="card-body my-2 mx-2">
                    <form action='' onSubmit={submitForm}>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4">Full Name</label>
                            <input type="text" defaultValue={formData['0'].name}  className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                           <input type="email" defaultValue={formData['0'].email} className="form-control" id="inputEmail4" />
                        </div>

                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label><span style={{color:address1.length<5?"red":"green"}}>{address1.length===0?"":address1.length<5?":Your name length is too short":": ✓"}</span>
                            <input type="text" value={address1} onChange={(e) => setAddress1(e.target.value)} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label><span style={{color:city.length<2?"red":"green"}}>{city.length===0?"":city.length<2?":Your name length is too short":": ✓"}</span>
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label><span style={{color:states.length<2?"red":"green"}}>{states.length===0?"":states.length<2?":your are not selected":": ✓"}</span>
                            <select id="inputState" name='inputState' onChange={(e) => setState(e.target.value)} className="form-select">
                                <option >Choose...</option>
                                <option value='Utter Pradesh' >Utter Pradesh</option>
                                <option value='Uttrakhand'>Uttrakhand</option>
                                <option value='Noida'>Noida</option>
                                <option value='Lucknow'>Lucknow</option>
                                <option value='Varansi'>Varansi</option>
                                <option value='Gorakhpur'>Gorakhpur</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label><span style={{color:address1.length<2?"red":"green"}}>{address1.length===0?"":address1.length<2?":Zip code require":": ✓"}</span>
                            <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12 my-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value='Marriage person' onChange={(e) => setMarried(e.target.value)} id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck"> Only marriage person check this.
                                </label><span style={{color:address1.length<5?"red":"green"}}>{address1.length===0?"":address1.length<5?"check require":": ✓"}</span>
                            </div>
                        </div>
                        <fieldset className="row my-3" >
                            <legend className="col-form-label col-sm-2 pt-0">Gender</legend><span style={{color:gender.length<2?"red":"green"}}>{gender.length===0?"":gender.length<2?":Select your gender":": ✓"}</span>
                            <div className="col-sm-10">
                                <div className="form-check" >
                                    <input className="form-check-input" type="radio" value='Male' onChange={(e) => setGender(e.target.value)} name="gridRadios" id="gridRadios1"  />
                                    <label className="form-check-label" htmlFor="gridRadios1">Male</label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="radio" value='Female' onChange={(e) => setGender(e.target.value)} name="gridRadios" id="gridRadios2" />
                                    <label className="form-check-label" htmlFor="gridRadios2">Female</label>
                                    </div>
                                    <div className="form-check disabled">
                                    <input className="form-check-input" type="radio" value='Other' onChange={(e) => setGender(e.target.value)} name="gridRadios" id="gridRadios3" />
                                    <label className="form-check-label" htmlFor="gridRadios3">Other</label>
                                </div>
                            </div>
                        </fieldset>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Date Of Birth</label>
                            <input type="date" value={birth} onChange={(e) => setBirth(e.target.value)} className="form-control" id="inputEmail4" />
                        </div>
                        <button type='submit' className="btn btn-primary my-2 float-start" onClick={() => dispatch(secondFormData(newData))} disabled={validateFrom()?true:false} >Save Form</button>
                        <button type='button' className="btn btn-success my-2 float-end"
                         onClick={(e)=> dispatch(nextStep(3), e.preventDefault())} disabled={validateFrom()?false:true} >Next</button>
                    </form>

                </div>
            </div>
    )
}

export default SecondStep