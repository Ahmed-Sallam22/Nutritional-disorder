import React, { useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import bac from '../../assets/WhatsApp Image 2023-05-30 at 22.21.38.jpg'
export default function Home() {
  useEffect (() => {
    window.scrollTo(0, 0)
  }, [])
  return <>
    <div className="home">
<div className="container-fluid ">
<div className="row py-5 text-home">
  <div className="img"></div>
  <div className="">
    <h1>الاضطراب الغذائى</h1>
    <div className="pt-5">
      <h3>
      ما الذي يُقلقك
      <br />
فيما يتعلّق بصحّتك اليوم؟
      </h3>
      <h5>
      أدخلْ أعراضك واكتشف ما يُسببها. هذه التقنية سريعة ومجانيّة ولا تتطلب أي معلومات شخصيّة.
      </h5>
    <h4 className='text-white'>يمكنك تشخيص مرضك خلال</h4>
    </div>
  </div>
  <div className="row pt-5 colum">
  <div className="col-md-6">
  <Link to={'/Choose'} className="btn w-100 button" >اختيار للأعراض</Link>
  </div>
  <div className="col-md-6">
  <Link to={'/Question'} className="btn w-100  button" >الاسئله</Link>
  </div>
  </div>
</div>

  <div className="row second  py-3 g-0">
    <div className="col-md-6 img2">
      <div className="imges text-center">
        <img src={bac}  className='imgesaaa' alt="" />
      </div>
    </div>
    <div className="col-md-6 py-5 bg-white px-3">
      <p className='fs-2 text-muted'>مقال</p>
      <h3 className='py-2'>فيروس الاضطراب الغذائى: كل ما تُريد أن تعرفه عن فيروس الاضطراب الغذائى</h3>
      <Link className='borde fw-bold py-2 cur' to={'/MainDetails'}>أٌقرأ المزيد</Link>
    </div>
  </div>


  
</div>
</div>
    </>
}
