export const SET_OK={type:'setOK'};
export const SET_PENDING = {type:'setPending'};
export const SET_ERROR = {type:'setError'};

 const reducer=(state,action)=>{
 
    switch(action.type){
        case(SET_OK.type):
            state ={error:false,loading:false,statusOk:true}
            return state
        case(SET_PENDING.type):
            state ={error:false,loading:true,statusOk:false}
            return state
        case(SET_ERROR.type):
            state ={error:true,loading:false,statusOk:false}
            return state
        default:
            return state
    }
}

export default reducer