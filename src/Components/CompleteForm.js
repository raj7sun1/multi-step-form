import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function CompleteForm() {

  const formData = useSelector(state => state.formReducer)

  useEffect(() => {
      console.log("display  in completeform ", formData)
  }, [])
  return (
    <div>
        <h1 style={{color:'green', border:'1px solid red'}}>Your Form Complete! Enjoy this.</h1>
    </div>
  )
}

export default CompleteForm