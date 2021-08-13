import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import Dashboard from '../Dashboard'

export default function AddInvoice() {
    const [clients,setClients] = useState([])

    const fetchClients = async() =>{
        try {
            const res = await db.collection('clients').get()
            const data = res.docs.map(item=>({...item.data(),id:item.id}))
            setClients(data)
            console.log(data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchClients()
    },[])
   
    const [invoice,setInvoice] = useState({
        firstName:'',
        data:'',
        dueDate:'',
        service:'',
        status:'',
        price:'',

    })
    const [patient,setPatient] = useState()
    const handleValue = (e)=>{
       console.log(e.target.value);
       setPatient(e.target.value)
    }
    console.log(patient);
    const [status,setStatus] = useState()
    const handleStatus = (e) =>{
        setStatus(e.target.value)
    }
    const inputChange = (e) =>{
        const {name,value} = e.target
        setInvoice(item=>({...item,[name]:value,firstName:patient,status:status}))
    }
    const onSubmit = async(e)=>{
        e.preventDefault()
        try {
            const request = await db.collection('invoices').add(invoice)
            console.log(request);
        } catch (error) {
            console.log(error);
        }
    }
    
    console.log(invoice);
    return (
        <>
         <Dashboard/>
        <div className="p-5">
            <h2>Create Invoice </h2>
           <form onSubmit={onSubmit} className="p-3" action="#">
             <button className="btn btn-success" type="submit">Save</button>
            <div className="row">
            <h5>Invoice Name</h5>
           <select onChange={(e)=> handleValue(e)} style={{width:"50%",height:"38px"}}  className=" col col-sm-12 col-md-6 form-select " aria-label="Default select example">
               {
                   clients.map(item=>{
                       const {firstName,lastName} = item
                       return(
                           <option  value={firstName}>{firstName}-{lastName}</option>
                       )
                   })
               }
            </select>
                <div className="col col-sm-12 mt-2 col-md-6">
                    <h5>Date</h5>
                    <input  onChange={inputChange}  type="date" name="data" className="form-control"  aria-label="Last name"/>
                </div>

                <div className="col col-sm-12 mt-2 col-md-6">
                    <h5>Due Date</h5>
                    <input  onChange={inputChange} type="date" name="dueDate" className="form-control" placeholder="Email" aria-label="Email"/>
                </div>
               
            
            </div>
           <div className="row">
               <h3>Add</h3>
           <div className="col col-sm-12 mt-2 col-md-6">
               <label htmlFor="Last name">Service type</label>
                    <input  onChange={inputChange} type="text" name="service" className="form-control"  aria-label="Last name"/>
                </div>
           <div className="col col-sm-12 mt-2 col-md-3">
              <label htmlFor="Last name"> Status</label>
                <select onChange={(e)=> handleStatus(e)} class="form-select" aria-label="Default select example">
                    <option value="choose" selected>Choose Status</option>
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                </select>
                </div>
           <div className="col col-sm-12 mt-2 col-md-3">
              <label htmlFor="Last name"> Price</label>
                  <input  onChange={inputChange} className="form-control"  type="number" name="price" />
            </div>
                <div className="d-flex justify-content-between w-100"   >
                <button className="btn btn-outline-primary col-2 mt-4 " type="reset">Reset</button>
                <button className="btn btn-primary mt-4 col-2 " type="button">+ Add Cart</button>
                </div>
           </div>
           </form>
        </div>
      </>
    )
}
