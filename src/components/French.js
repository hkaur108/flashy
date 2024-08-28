import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../App.css";


export default function French(props) {
    const {french}=props.words;
    const [eng,seteng] =props.eng;


    useEffect(()=>{
        seteng(false)
    },[eng])


  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center mt-1">
                    <div className="card " style={{width:"700px",height:"400px",borderRadius:"35px", boxShadow:"10px 10px 5px 5px #939185"}}>
                        <div className="innerData mx-auto my-5 p-5 w-75">
                            <div className="language">
                                <p className='text-dark text-center fs-3 fst-italic'>French</p>
                                </div>
                            <div className="word">
                                <h1 className='text-dark text-center fw-bold'>{french}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
