import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import Dashboard from '../Dashboard'

export default function Add() {
    const history = useHistory()
    const initialUser = {
        firstName:'',
        lastName:'',
        email:'',
        address:'',
        phone:'',
    }
    
    const [user,setUser] = useState()
    const inputChange = useCallback((e) => {
        const {name,value} = e.target
        setUser(prev=>({...prev,[name]:value}))
  },[])
    const handleSubmit = async (e)=>{
          e.preventDefault()
          try {
              const success ={...user,creadAt:new Date()}
              const res = await db.collection('clients').add(success)
              console.log(res);
                  history.push('/clients')
          } catch (error) {
              console.log(error);
          }
          console.log(user);
    }
    console.log(user);
    return (
      <>
         <Dashboard/>
        <div className="p-5">
            <h2>Add Patient Form</h2>
           <form  className="row p-3" action="#" onSubmit={handleSubmit}>
           
                <div className="col col-sm-12 mt-2 col-md-6 ">
                    <input onChange={inputChange} type="text" name="firstName" className="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div className="col col-sm-12 mt-2 col-md-6">
                    <input onChange={inputChange} type="text" name="lastName" className="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
                <div className="col col-sm-12 mt-2 col-md-6">
                    <input onChange={inputChange} type="email" name="email" className="form-control" placeholder="Email" aria-label="Email"/>
                </div>
                <div className="col col-sm-12 mt-2 col-md-6">
                    <input onChange={inputChange} type="phone" name="phone" className="form-control" placeholder="Phone" aria-label="Last name"/>
                </div>
                <div className="col col-sm-12 mt-2 col-md-6">
                    <input onChange={inputChange} type="text" name="address" className="form-control" placeholder="Address" aria-label="Last name"/>
                </div>
                <div className="col-12 mt-2 w-100 ">
                    <button type="submit" className="btn btn-primary"> Add Patient</button>
                </div>
           
           </form>
        </div>
      </>
    )
}
