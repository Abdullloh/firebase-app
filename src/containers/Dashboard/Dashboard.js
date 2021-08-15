import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { SignOutAction } from '../../store/Actions/UserActions'
import {DashboardStyle} from './DashboardStyle'
export default function Dashboard() {
  const dispatch  = useDispatch()
  const history = useHistory()
  const signOut = ()=>{
     dispatch(SignOutAction())
     history.replace('/sign-in')
  }
    return (
        <DashboardStyle>
            <div className="d-flex flex-column dashboard flex-shrink-0 py-3 text-white bg-dark" style={{width: "280px;"}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
       
          <span className="fs-4">Menu</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" >
            <NavLink to='/balance' className="nav-link " style={{top:"22px"}}>
              <p><i class="bi bi-credit-card-2-front-fill"></i> Balance & Card</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/clients" className="nav-link">
             <p><i class="bi bi-people"></i>  Patients </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/invoice" className="nav-link">
              <p> <i class="bi bi-receipt-cutoff"></i>  Invoice</p>
            </NavLink>
          </li>
        </ul>
        <NavLink to='/sign-in' onClick={signOut} className="nav-link">
              <p> <i class="bi bi-box-arrow-left"></i>  Sign Out</p>
            </NavLink>
      </div>
        </DashboardStyle>
    )
}
