import React from 'react'
import { useSelector } from 'react-redux';
import DisplayForm from './DisplayForm';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import CompleteForm from './CompleteForm';


function Mainform() {

    const step = useSelector(state => state.stepReducers)
    const formReducer = useSelector(state => state.formReducer)
    //const { currentStep, finalData } = useContext(multiStepContext)
    // console.log('app formReducer',formReducer);
   
  
    function showStep(steps) {
   
      switch (steps) {
        case 1:
          return <FirstStep />
        
        case 2:
          return <SecondStep />
    
        case 3:
          return <ThirdStep />
          
        case 4:
          return <DisplayForm />

        case 5:
          return <CompleteForm />
      }
    }

  return (
    <div>
      { showStep(step)}
    </div>
  )
}

export default Mainform
