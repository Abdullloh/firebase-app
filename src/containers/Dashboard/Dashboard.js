import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {DashboardStyle} from './DashboardStyle'
export default function Dashboard() {
    return (
        <DashboardStyle>
            <div className="d-flex flex-column dashboard flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px;"}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
       
          <span className="fs-4">Menu</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to='/balance' className="nav-link text-white ">
              Balance & Card
            </NavLink>
          </li>
          <li>
            <NavLink to="/clients" className="nav-link text-white">
              Patients
            </NavLink>
          </li>
          <li>
            <NavLink to="/invoice" className="nav-link text-white">
              Invoice
            </NavLink>
          </li>
        </ul>
      </div>
        </DashboardStyle>
    )
}
