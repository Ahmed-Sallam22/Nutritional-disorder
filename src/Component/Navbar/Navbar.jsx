import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return <>
    <nav class="navbar navbar-expand-lg bg-white  fixed-top  px-3">
  <Link className="navbar-brand " to={'/'}>الاضطراب الغذائى</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav pe-4 me-auto">
      <li className="nav-item active">
        <Link className="nav-link " to={'/'}>الرئيسية</Link>
      </li>
      <li className="nav-item dropdown ">
          <Link className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            تشخيص حالتك
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={'/choose'} >اختيار الأعراض</Link></li>
            <li><Link className="dropdown-item" >الأسئلة</Link></li>
          </ul>
        </li>
      <li className="nav-item active">
        <Link className="nav-link " to={'/AllDiseases'}>كل الأمراض</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to={'/About'}>معلومات عنا</Link>
      </li>
    </ul>
  </div>
</nav>
  </>
}
