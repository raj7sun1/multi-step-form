import { FIRST_FORM_DATA } from "../constant"
import { SECOND_FORM_DATA } from "../constant";
import { THIRD_FORM_DATA } from "../constant";
import { FINAL_FORM_DATA } from "../constant";
export const nextStep = (step)=>{
    return {
        type: "STEP_NEXT",
        data:step
    }
}

export const backStep = (step)=>{
    return {
        type: "STEP_PREV",
        data:step
    }
}



export const firstFormData = (data)=>{
    return {
        type:FIRST_FORM_DATA,
        data:data
    }
}

export const secondFormData = (data)=>{
    return {
        type:SECOND_FORM_DATA,
        data:data
    }
}

export const thirdFormData = (data)=>{
    return {
        type:THIRD_FORM_DATA,
        data:data
    }
}

export const finalFormData = (data)=>{
    return {
        type:FINAL_FORM_DATA,
        data:data
    }
}