import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Details.css'

export default function Details() {
  const location=useLocation()
  const {item}=location.state
  console.log("asdad", item);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <>
<div className="container-fluid pt-5">
  <div className="bg-white rounded-5  px-5">
      <div className="row py-3">
        <div className="col-lg-12 ">
          <h3 className='text-center'>
          {item.disease_name}
          </h3>
          <div className="dis_img pt-1 text-center">
            <img src={item.disease_img} className='w-50' alt="" />
          </div>

          <div className="main-desc pt-5">
            <h4 className='bord' >وصف المرض</h4>
          </div>
          <div className="body-text pt-2 border-bottom">
            <h5>{item.disease_description}</h5>
          </div>
          <div className="main-desc pt-3">
            <h4 className='bord' >أسباب المرض</h4>
          </div>
          <div className="body-text pt-2 border-bottom">
            <h5>{item.disease_causes}</h5>
          </div>
          <div className="main-desc pt-3">
            <h4 className='bord' >أعراض المرض</h4>
          </div>
          <div className="body-text pt-2 border-bottom">
            <h5>{item.description_Sy}</h5>
            <ul>
              {item.Symptoms_of_the_disease.map((item)=>{
                return <li>{item.symptoms_disease}</li>
              })}
            </ul>
          </div>
          <div className="main-desc pt-3">
            <h4 className='bord' >تشخيص المرض</h4>
          </div>
          <div className="body-text pt-2 border-bottom">
            <h5>{item.disease_diagnosis}</h5>
          </div>
          <div className="main-desc pt-3">
            <h4 className='bord' >مضاعفات المرض</h4>
          </div>
          <div className="body-text pt-2 border-bottom">
            <h5>{item.complications_of_the_disease}</h5>
          </div>
          <div className="main-desc pt-3">
            <h4 className='bord' >علاج المرض</h4>
          </div>
          <div className="body-text pt-2 border-bottom">
            <h5>{item.disease_treatment}</h5>
          </div>
          <div className="main-desc pt-3">
            <h4 className='bord' >دواء المرض</h4>
          </div>
          <div className="body-text pt-2 border-bottom">
            <h5>{item.Medications_related_to_the_disease}</h5>
          </div>
          <div className="main-desc pt-3">
            <h4 className='bord' >فيديو عن المرض</h4>
          </div>
          <div className="body-text pt-2 border-bottom">
          <iframe width="560" height="315" src={item.disease_youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
          <div className="main-desc pt-3">
            <h4 className='bord' >المصادر والمراجع</h4>
          </div>
          <div className="body-text pt-2 border-bottom">

            {item.Sources_and_references.map((items)=>{
              return <div className="center pb-2 ">
                <h5 className='dire'>{items.name}</h5>
                <Link to={items.links}><button className='btn btn-outline-primary'>
                  الموقع
                  </button></Link>

              </div>
            })}
          </div>
          <div className="main-desc pt-3">
            <h4 className='bord' >ترشيحات</h4>
          </div>
          <div className="body-text pt-2">
            <div className="row">

            {item.Doctors.map((doc)=>{
              return <div className="col-lg-6">
                <div className="row">
                  
                  <div className="col-lg-5">
                    <h5>الأسم: {doc.Name}</h5>
                    <h5>العنوان : {doc.Address}</h5>
                    <h5> رقم الهاتف :   {doc.Phone}</h5>
                  </div>
                  <div className="col-lg-4 pb-2">
                    <img src={doc.img} className='w-50' alt="" />
                  </div>
                </div>
                
              </div>
            })}
          </div>
            </div>
         
          
        </div>
      </div>
  </div>
  
</div>


  
  </>
  
}
