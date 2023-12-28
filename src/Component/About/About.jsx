import React, { useEffect } from 'react'
import './About.css'
import photo1 from '../../assets/About/321244257_3403008086577976_7139509917639140251_n.jpg'
import photo2 from '../../assets/About/252713062_602007287897038_3522771921439234960_n.jpg'
import photo3 from '../../assets/About/344546972_960519748462657_7447905375365223054_n.jpg'
import photo4 from '../../assets/img/usa.jpg'
import photo5 from '../../assets/img/usa.jpg'
import { Link } from 'react-router-dom'

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return <>
    <div className="container rounded-5 py-4">
        <div className=" bg-white rounded-5  pt-5">
          <div className="mx-auto">
          <div className="text-about pb-5 text-center ">
<div className="row text-center pt-5 pb-2  Our_st_text">
            <h2 className='fw-bolder'>team members</h2>
        </div>
        <div className="container">
            <div className="row g-3">
                <div className="col-12 col-lg-4">
                    <div className="card p-0">
                        <div className="card-image">
                            <img src={photo1} alt=""/>
                        </div>
                        <div className="card-content d-flex flex-column align-items-center">
                            <h4 className="pt-2">ايمان صلاح جاد هجرس</h4>
                        

                            <ul className="social-icons d-flex justify-content-center">
                                <li >
                                    <Link target='_blank' to={'https://www.facebook.com/profile.php?id=100052884518193&mibextid=ZbWKwL'}>
                                        <span className="fab fa-facebook"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card p-0">
                        <div className="card-image">
                            <img src={photo2} alt=""/>
                        </div>
                        <div className="card-content d-flex flex-column align-items-center">
                            <h4 className="pt-2">ايمان العدوى توفيق</h4>
                        

                            <ul className="social-icons d-flex justify-content-center">
                                <li>
                                    <Link to={'https://www.facebook.com/eman.eladawy.3139?mibextid=ZbWKwL'}>
                                        <span className="fab fa-facebook"></span>
                                    </Link>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card p-0">
                        <div className="card-image">
                            <img src={photo3} alt=""/>
                        </div>
                        <div className="card-content d-flex flex-column align-items-center">
                            <h4 className="pt-2">ضحى عبد الحليم عبد الجيد</h4>
                        

                            <ul className="social-icons d-flex justify-content-center">
                                <li>
                                    <Link to={'https://www.facebook.com/doha.abozied.1?mibextid=ZbWKwL'}>
                                        <span className="fab fa-facebook"></span>
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card p-0">
                        <div className="card-image">
                            <img src={photo5} alt=""/>
                        </div>
                        <div className="card-content d-flex flex-column align-items-center">
                            <h4 className="pt-2">شروق أيمن</h4>
                        

                            <ul className="social-icons d-flex justify-content-center">
                                <li>
                                    <Link to={'https://www.facebook.com/doha.abozied.1?mibextid=ZbWKwL'}>
                                        <span className="fab fa-facebook"></span>
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card p-0">
                        <div className="card-image">
                            <img src={photo5} alt=""/>
                        </div>
                        <div className="card-content d-flex flex-column align-items-center">
                            <h4 className="pt-2">اسلام سليم عبد الغفار</h4>
                        

                            <ul className="social-icons d-flex justify-content-center">
                                <li>
                                    <Link to={'https://www.facebook.com/doha.abozied.1?mibextid=ZbWKwL'}>
                                        <span className="fab fa-facebook"></span>
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>

          </div>
          
          </div>
         

        </div>
    </div>
  </>
}

export default About