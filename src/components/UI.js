import React, { createContext, useEffect, useState } from 'react'
import Card from './Card'
import Buttons from './Buttons'
import French from './French'
import { data } from './Data'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Heading from './Heading'

export const wordContext= createContext();

export default function UI() {

  const [words,setwords] =useState(data);
  const [correctClicked,setcorrectClicked] =useState(false);
  const [wrongClicked,setwrongClicked] =useState(false);
  const [flipCard,setflipCard] =useState(false);
  const[count,setcount]= useState(0);
  const [eng,seteng] = useState(true)


  useEffect(()=>{
  const interval=setInterval(()=>{
      setflipCard(true);
  },4000)
    return ()=>clearInterval(interval)
  },[flipCard])

  return (
    <>
    <Heading/>
    <div>
      {(!flipCard) ?<Card words={words[count]}  eng={[eng,seteng]}/> : <French words={words[count]} eng={[eng,seteng]}/>}
      <wordContext.Provider value={[words,setwords, correctClicked,setcorrectClicked,wrongClicked,setwrongClicked,flipCard,setflipCard,count,setcount]}>
          <Buttons eng={[eng,seteng]}/>
      </wordContext.Provider>
  
    </div>
    
    </>
    
  )
}
