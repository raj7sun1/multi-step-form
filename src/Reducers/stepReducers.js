const stepReducers = (data=1, action) => {
    switch (action.type) {
        case "STEP_NEXT":
            
            //console.log('action trigered',action.data);
           return action.data;
           
        // case "STEP_PREV":
        //      console.log('action trigered',action.data);
        //         return action.data;
         default: return data;
    }
}

export default stepReducers;