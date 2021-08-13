import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import Dashboard from '../Dashboard'

export default function Admin() {
    const [clients,setClients] = useState([])

    const fetchClients = async() =>{
        try {
            const data = await db.collection('invoices').get()
            const res = data.docs.map(item=>({...item.data(),id:item.id}))
            setClients(res)
        } catch (error) {
            
}
}
const sortedValue = async ()=> {
    try {
        await db.collection('invoices').orderBy('price','desc').onSnapshot(data=>{
            const response = data.docs.map(item => ({ ...item.data(), id: item.id }));
            console.log(response)
            if (response.length) {
                setClients(response)
              }
        })
    } catch (error) {
        
    }
}
useEffect(()=>{
    fetchClients()
    sortedValue()
},[])

     
    return (
        <>
          <Dashboard/>
          <div style={{width:"80% ",padding:"25px"}}>
            <div className="d-flex  justify-content-between align-items-center">
            <h1>Invoice</h1>
            <Link className="btn btn-primary" to='/invoice/add'> Add invoice</Link>
            </div>
            <table style={{padding:"0 15px"}} class="table p-4">
            <thead>
                <tr>
                <th  scope="col">Client</th>
                <th onClick={sortedValue} scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Due</th>
                </tr>
            </thead>
            <tbody>
                {
                    clients.map(item=>{
                        const date =new Date()
                        const{firstName,service,dueDate,price,status} = item
                        return(
                          <tr className="rounded-pill" >
                              <td>{firstName} -{service}</td>
                              <td>{price}</td>
                              
                              <td><button className={status === 'paid'? 'btn btn-success': 'btn btn-danger'}>{status}</button></td>
                              <td>{dueDate}</td>
                          </tr>
                        )
                    })
                }
              
            </tbody>
            </table>
        </div>
        </>
    )
}
