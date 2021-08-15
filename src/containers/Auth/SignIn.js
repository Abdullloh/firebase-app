import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Bg from '../../assets/images/BgSignIn.png'
import { auth } from '../../firebase/firebase'
import {SignInAction} from '../../store/Actions/UserActions';
import {SignContainer} from './StyleSign'
export default function SignIn() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (e) =>{
    const {name,value} = e.target
    setUser(state=>({...state,[name]:value}))
  }
    const handleLogin = async (e)=>{
       e.preventDefault()
     try {
       const {email,password} = user;
       const req = await auth.signInWithEmailAndPassword(email,password);
       console.log(req);
         const {uid,refreshToken,l} = req.user
       if(uid){

         dispatch(SignInAction({l,refreshToken}))
         history.push('/clients')
       }
     } catch (error) {
       console.log(error);
     }
    }
    console.log(user);
    return (
       <SignContainer>
         <div className="img-container">
             <img src={Bg} alt="Bg" />
         </div>
         <div className="form-container">
               <form onSubmit={(e)=>handleLogin(e)} action="#">
                 <h3>Welcome to Sign in</h3>
                 <p>   Do not have an account ? <Link to = '/sign-up' > Sign Up </Link></p>
                 <div>
                   <label htmlFor="email" className="d-block">EMAIL</label>
                   <input onChange={handleInputChange} type="email" name='email' />
                 </div>
                <div>
                   <label htmlFor="password" className="d-block">PASSWORD</label>
                   <input onChange={handleInputChange} type="password" name='password' />
                  </div>   
                         
                        <button>Sign In</button>
               </form>
         </div>
       </SignContainer>
    )
}
