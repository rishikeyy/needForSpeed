import React, { useEffect, useState } from 'react';
import './paragraphs'
import './textcontainer'


const paras=Object.values(paragrahs);
const [i,seti]=useState(0);
const [ii,setii]=useState(0);
const n=paras.length
const allTypedEntries=0,unCorrectedErrors=0;
const [currEle,setCurrEle]=useState(0);

const newElement = document.createElement("p");//this is where text will be shown



//put a function which puts underline under currEle also add animation for its transition to next letter




function paraChanger(){
    seti(i+1);
    if(i==n)seti(i-1);//feed last key data if all keys are mastered and data is exhauasted
    setCurrEle(0);
    setii(0);
    //render next para on screen by useEffect
   
    }
      

    function nextChar(){
    //move current underliner to next char and render content on screen
    allTypedEntries++;
    setCurrEle(currEle+1)
    
    }

    function TextContainer(){

        useEffect(()=>{
            const str = paras[i][ii];
           
          const wrappedLetters ="";
          
            for(let index=0;index<(str.length);index++)
                if(str[index]!=' ')
                wrappedLetters+= <span id={index}>{str[index]}</span>
                else 
                wrappedLetters+= <span style="display: inline-block; font-size: 24px; color: #000000; background: #cccccc; border-radius: 6px; padding: 10px 20px;">•</span>
        
            const tempEle=document.createElement('p')
            tempEle.innerHTML=wrappedLetters
           // newElement.innerHTML = wrappedLetters;
            document.getElementById("textcontainer").innerHTML=tempEle.innerHTML;
            //how to add shadow dom to content for undeliningx
        },[i,ii,currEle]);



        useEffect(()=>{
            //  remove the  underline class of prev element and add underline class to currEle
            const prevEle = document.getElementsByClassName("underline");
            element.classList.remove("underline");

            //now add underline class to currEle
            const containerChildren=  document.getElementById("textcontainer");
            containerChildren[currEle].classList.add("underline");
        },[currEle])
        

        return(
            <>
            <textcontainer id="textcontainer"></textcontainer>
            </>
        )
    }
    export default TextContainer;

    // export {
    //     paraChanger,
    //     nextChar
    // }