import React, { useEffect, useState } from 'react';
import './paragraphs'

const paras=Object.values(paragrahs);
const [i,seti]=useState(0);
const [ii,setii]=useState(0);
const n=len(paras)
const allTypedEntries=0,unCorrectedErrors=0;
const [currEle,setCurrEle]=useState(0);

const newElement = document.createElement("p");//this is where text will be shown



//put a function which puts underline under currEle also add animation for its transition to next letter



useEffect(()=>{
    const str = paras[i][ii];
   
  const wrappedLetters ="";
  
    for(let index=0;index<len(str);index++)
        if(str[index]!=' ')
        wrappedLetters+= <span id={index}>{word}</span>
        else 
        wrappedLetters+= <span style="display: inline-block; font-size: 24px; color: #000000; background: #cccccc; border-radius: 6px; padding: 10px 20px;">•</span>

    const tempEle=document.createElement('p')
    p.innerHTML=wrappedLetters
   // newElement.innerHTML = wrappedLetters;
    document.getElementById("textcontainer").innerHTML=p.innerHTML;
    //how to add shadow dom to content for undeliningx
},[i,ii,currEle]);

function paraChanger(){
    seti(i+1);
    if(i==n)seti(i-1);//feed last key data if all keys are mastered and data is exhauasted
    setCurrEle(0);
    setii(0);
    //render next para on screen by useEffect
   
    }
      

    function nextChar(){
    //move current underliner to next char and render content on screen
    allTypedEnries++;
    setCurrEle(currEle+1)
    
    }

    function textContainer(){
        return(
            <>
            <textcontainer id="textcontainer"></textcontainer>
            </>
        )
    }
    export default textContainer;

    // export {
    //     paraChanger,
    //     nextChar
    // }