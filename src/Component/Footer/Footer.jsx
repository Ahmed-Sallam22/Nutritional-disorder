import React from 'react'
import './Footer.css'
export default function Footer() {
return<>
<footer className=' text-center bg-main-color pt-4'>
<div className="Footer-text  pt-4">
        <div className="container- w-100  py-2 bg-grey ">
            <div className="row justify-content-center align-items-center">
                <div className="row">
                <div className="col-md-4">
                <h4 className='fw-bolder'>حول موقعنا</h4>
                <div className='social'>
                <ul>
                    <li><a href="#Facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#twitter"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="#!"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#!"><i className="fa-brands fa-github"></i></a></li>
                    
                </ul>

                </div>
                

        </div>
                    <div className="col-lg-4">
                    <h4 className='fw-bolder' >شخص مرضك بنفسك</h4>

                    <h6 >المعلومات المذكورة هنا تمت مراجعتها طبيا&nbsp;و غرضها الرئيسى هو زيادة الوعى الثقافى الطبى&nbsp;لدى المواطن العربى ، و هى ليست بديلا و لا تغنى عن استشارة الطبيب المتخصص فهو الجهة الوحيدة القادرة على توجيهكم و علاجكم بشكل صحيح ، كما أن المادة المذكورة هنا على قدر صحتها و تخصصها إلا أننا لا ننصح أن يعتمد عليها طلبة كليات الطب كمرجع دراسى لهم.</h6>

                    </div>
              
           
        <div className="col-md-4">
        <h4 className='fw-bolder'>معلومات حول الموقع</h4>
        <p>يقوم هذا القسم بتشخيص الحالات المرضية ، و ذلك بسؤال المريض عدة أسئلة متسلسلة تتعلق بشكوى المريض الرئيسية و تعتمد على إجابة المريض على كل سؤال على حدة بــ نعم أو بــ لا.</p>
        </div>
            </div>
        </div>
        </div>
        </div>
    </footer>
        </>

}


     



            //   <>
            //   <div className="my-2 bg-opacity-50 bg-dark text-center shadow  rounded-3 ">
            //     <div className="text-end www ">
            //       <p className=" text-center  text-dark fs-3">
            //         انت تعاني من {detectedDes.disease_name}
            //       </p>
            //       <p className="  text-dark fs-3">
            //         <span className="text-white">وصف المرض: </span>{" "}
            //         {detectedDes.disease_description}
            //       </p>
            //       <p className="  text-dark fs-3">
            //         <span className="text-white">مضاعفات المرض :</span>{" "}
            //         {detectedDes.disease_plus}
            //       </p>
            //       <p className="  text-dark fs-3">
            //         <span className="text-white">علاج المرض :</span>{" "}
            //         {detectedDes.determ}
            //       </p>
            //     </div>
            //     <div className="div mb-2">
            //       <Link to={"/"} className="btn btn-danger px-3 mx-2">
            //         للمزيد
            //       </Link>
            //       <Link to={"/"} className="btn btn-danger">
            //         الرجوع للرئيسيه
            //       </Link>
            //     </div>
            //   </div>
            // </>
