import {SIGN_IN,SIGN_OUT,SIGN_UP} from '../ActionTypes'

const initialState= {
    l:'',
    refreshToken:''
};
const userReducer = (state = initialState,action) => {
    const {l,refreshToken} = {...action?.payload};

    switch(action.type){
        case SIGN_IN:
          case  SIGN_UP:    
        {
            return { ...state,l,refreshToken}
        }
        case   SIGN_OUT:
            {
                return initialState
            }
        default: {
            return state;
          }
    }
}
export default userReducer