import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import Dashboard from '../Dashboard'

export default function Balance() {
    const [balance,setBalance] = useState([])
    const fetchBalance = async()=> {
        try {
            const res = await db.collection('invoices').get()
            const data = res.docs.map(item=>({...item.data()}))
            setBalance(data)
            console.log(data);
        } catch (error) {
            
        }
    } 
    useEffect(()=>{
        fetchBalance()
    },[])
    return (
        <>
            <Dashboard/>
            <h1>Balance</h1>
            <h3>Your Current foyda :{
                 balance.map(item=>{
                     const{price} = item
                     return(
                         price
                     )
                 })
                }</h3>
        </>
    )
}
