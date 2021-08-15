import {SIGN_IN,SIGN_OUT,SIGN_UP} from  "../ActionTypes";
export const  SignInAction =({l,refreshToken}) =>{
    return {
        payload:{l,refreshToken},
        type:SIGN_IN,
      }
}
export const  SignUpAction =({l,refreshToken}) =>{
    return {
        payload:{l,refreshToken},
        type:SIGN_UP,
      }
}
export const  SignOutAction =() =>{
    return {
        type:SIGN_OUT,
      }
}
