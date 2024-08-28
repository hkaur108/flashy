import React from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Card(props) {
    const {english}=props.words;


return (
    <>
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center mt-5">
                    <div className="card cardStyle " style={{width:"700px",height:"400px",borderRadius:"35px", boxShadow:"10px 10px 5px 5px #939185"}}>
                        <div className="innerData mx-auto my-5 p-5 position-relative w-75">
                            <div className="language">
                                <p className='text-light text-center fs-3 fst-italic'>English</p>
                                </div>
                            <div className="word">
                                <h1 className='text-light text-center fw-bold'>{english}</h1>
                            </div>
                                <div className="emoji position-absolute display-3 top-50 end-0 translate-middle-y"> 🤔</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
