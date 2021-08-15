import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import Dashboard from '../Dashboard'

export default function Clients() {
    const[clients,setClients] = useState([])
    
    const fetchClients = async() =>{
        try {
            const res = await db.collection('clients').get()
            const data = res.docs.map(item=> ({...item.data(),id:item.id}))
            console.log(data);
            setClients(data)
        } catch (error) {
            console.log(error);
        }
    }
    const fetchChanges = async () => {
        try {
          await db.collection('clients').orderBy('createdAt', 'desc').onSnapshot(data => {
            const response = data.docs.map(item => ({ ...item.data(), id: item.id }));
            console.log(response)
            if (response.length) {
              setClients(response)
            }
          });
        } catch (error) {
          console.log(error);
        }
      }
    useEffect(()=>{
        fetchChanges()
        fetchClients()
    },[])
   const deletePatient = useCallback( async(id) =>{
       console.log(id);
      try {
          const res = await db.collection('clients').doc(id).delete();
          const data = res
          fetchClients()
          console.log(data);
      } catch (error) {
          console.log(error);
      }
},[])
    console.log(clients);
    return (
      <>
        <Dashboard/>
        <div style={{width:"80% ",padding:"25px",overflowY:"scroll"}}>
            <div className="d-flex  justify-content-between align-items-center">
            <h1>Clients</h1>
            <Link className="btn btn-primary" to='/clients/add'> Add patient</Link>
            </div>
            <table style={{padding:"0 15px"}} class="table p-4">
            <thead>
                <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    clients.map(item=>{
                        const{id,firstName,lastName,address,phone,email} = item
                        return(
                          <tr className="rounded-pill" key={id}>
                              <td>{firstName}</td>
                              <td>{lastName}</td>
                              <td>{email}</td>
                              <td>{address}</td>
                              <td>{phone}</td>
                              <td><Link to={`/clients/edit/${id}`} className="btn btn-success"><i class="bi bi-pencil-fill"></i></Link></td>
                              <td><button onClick={()=> deletePatient(id)} className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
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

