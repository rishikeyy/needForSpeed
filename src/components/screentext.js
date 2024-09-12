import React, { useContext, useEffect, useState } from 'react';
import paras from './paragraphs'

import './textcontainer.css'
import scontext from './Context';


//now problem is usecontext is defined inside textcomponent and we want to use them in below two fuctions
//but also we cant put those funtions in textcomp coz we want to export them->use wrapper functions

export function paraChanger(){
    context.seti(context.i+1);
    if(context.i==context.n)context.seti(context.i-1);//feed last key data if all keys are mastered and data is exhauasted
    context. setCurrEle(0);
    context.setii(0);
    context.startTime=0;
    context.correctlyTypedWords
    context.totalTypedWords
    //render next para on screen by useEffect
   
    }

    function nextChar(){
        //move current underliner to next char and render content on screen
        context.allTypedEntries++;
        context.setCurrEle(context.currEle+1)
        
        }




function TextContainer(){
    const context=useContext(scontext)
//const newElement = document.createElement("p");//this is where text will be shown



//put a function which puts underline under currEle also add animation for its transition to next letter




      

    



        useEffect(()=>{
            let str = paras[context.i][context.ii];
           
          let wrappedLetters ="";
          
            for(let index=0;index<(str.length);index++)
                if(str[index]!=' ')
                wrappedLetters+= `<span id={index}>{str[index]}</span>`
                else 
                wrappedLetters+= `<span id={index} style={{display: 'inline-block', fontsize: '24px', color: '#000000', background: '#cccccc', borderRadius:'6px', padding: '10px 20px'}}>•</span>`
        
            let tempEle=document.createElement('p')
            tempEle.innerHTML=wrappedLetters
           // newElement.innerHTML = wrappedLetters;
            document.getElementById("textcontainer").innerHTML=tempEle.innerHTML;
            //how to add shadow dom to content for undeliningx
        },[context.i,context.ii]);



        useEffect(()=>{
            //  remove the  underline class of prev element and add underline class to currEle
            const prevEle = document.getElementsByClassName("underline");
            prevEle.classList.remove("underline");

            //now add underline class to currEle
            const containerChildren=  document.getElementById("textcontainer");
            containerChildren[context.currEle].classList.add("underline");
        },[context.currEle])
        

        return(
            <>
            <textcontainer id="textcontainer"></textcontainer>
            </>
        )
    }
    export default TextContainer;
    //export paraChanger
    // export {
    //     paraChanger,
    //     nextChar
    // }