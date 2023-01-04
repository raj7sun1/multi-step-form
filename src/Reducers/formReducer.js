import { FIRST_FORM_DATA } from "../constant";
import { SECOND_FORM_DATA } from "../constant";
import { THIRD_FORM_DATA } from "../constant";
import { FINAL_FORM_DATA } from "../constant";

export const formReducer = (data=[], action)=>{
    switch (action.type) {
        case FIRST_FORM_DATA:
           // console.log(" FIRST_FORM_DATA reducer called", action)
            return [action.data];

        case SECOND_FORM_DATA:
        //    console.log(" SECOND_FORM_DATA reducer called", action)
            return [...data, action.data];

        case THIRD_FORM_DATA:
        //    console.log(" THIRD_FORM_DATA reducer called", action)
            return [...data, action.data];

        case FINAL_FORM_DATA:
                //    console.log(" THIRD_FORM_DATA reducer called", action)
            return data['']
    
        default:
            return data
    }
}