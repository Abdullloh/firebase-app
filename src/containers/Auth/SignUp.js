import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Bg from '../../assets/images/BgSignIn.png'
import { auth } from '../../firebase/firebase'
import {SignUpAction} from '../../store/Actions/UserActions';
import {SignContainer} from './StyleSign'
export default function SignUp() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [errors,setErrors] = useState('')
  const [user, setUser] = useState({
      firstName:'',
      lastName:'',
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
       const req = await auth.createUserWithEmailAndPassword(email,password);
       console.log(req);
         const {uid,refreshToken,l} = req.user
       if(uid){

         dispatch(SignUpAction({l,refreshToken}))
         history.push('/clients')
       }
     } catch (error) {
       console.log(error);
       setErrors(error.message)
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
                 <h3>Welcome to Sign Up</h3>
                 <p> Already have an account ? <Link to = '/sign-in' > Sign in </Link></p>
                 <div>
                   <label htmlFor="email" className="d-block">FIRST NAME</label>
                   <input onChange={handleInputChange} type="text" name='firstName' />
                 </div>
                 <div>
                   <label htmlFor="email" className="d-block">LAST NAME</label>
                   <input onChange={handleInputChange} type="text" name='lastName' />
                 </div>
                 <div>
                   <label htmlFor="email" className="d-block">EMAIL</label>
                   <input onChange={handleInputChange} type="email" name='email' />
                   <em style={{fontSize:"15px",color:'red'}}>{errors}</em>
                 </div>
                <div>
                   <label htmlFor="password" className="d-block">PASSWORD</label>
                   <input onChange={handleInputChange} type="password" name='password' />
                  </div>   
                         
                        <button>Sign Up</button>
               </form>
         </div>
       </SignContainer>
    )
}
