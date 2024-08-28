import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useContext } from 'react';
import { wordContext } from './UI';

export default function Buttons(props) {

    const [eng,seteng]=props.eng;
    const wordinfo= useContext(wordContext);
    const [words,setwords,correctClicked,setcorrectClicked,wrongClicked,setwrongClicked,flipCard,setflipCard,count,setcount] =wordinfo;
    
    const handleNext=()=>{
        if(count < words.length-1){
            setcount(count=>count+1)
            return
        }
        else{
            setcount(0)
            return 
        }
    }

    const handleprev=()=>{
        if(count>0){
            setcount(count=>count-1)
            return
        }
        else{
            setcount(words.length-1)
            return
        }
    }

    const handleFlip=()=>{
        setflipCard(!flipCard)
        seteng(!eng)
    }

return (
    <div>
        <div className="container mt-3" style={{width:"700px"}}>
            <div className="row">
                <div className="col d-flex align-items-center-justify-content-center">
                    <button className='w-100 btn btn-outline-secondary btn-sm btn-block' onClick={handleFlip} >Flip Card</button>
                </div>
            </div>
        </div>
        <div className="container w-50">
            <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center mt-1">
                    <button onClick={handleprev} className='w-100 btn btn-sm btn-outline-secondary'>
                        Previous
                    </button>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center mt-1">
                    <button onClick={handleNext} className='w-100 btn btn-sm btn-outline-secondary text-center'>
                        Next
                    </button>
                </div>
            </div>
        </div>
    </div>
)
}
