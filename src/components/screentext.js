import React, { useContext, useEffect, useState } from 'react';
import paras from './paragraphs'

import './textcontainer.css'
import scontext from './Context';
//import { ClassNames } from '@emotion/react';

//-+-+- > put focus on the text part coz pressing space scrolls down and it will
//also resolve the problem of keypress event

//now problem is usecontext is defined inside textcomponent and we want to use them in below two fuctions
//but also we cant put those funtions in textcomp coz we want to export them->use wrapper functions

var paraChanger=null;
var nextChar=null;
function TextContainer(){

    const context=useContext(scontext)

  

     

    
//const newElement = document.createElement("p");//this is where text will be shown



//put a function which puts underline under currEle also add animation for its transition to next letter




      

    



        useEffect(()=>{
            let str = paras[context.i][context.ii];
           
            let wrappedLetters ="";
            
                for(let index=0;index<(str.length);index++){
                  //  let currChar=str[index]
                    if(index===0){
                        wrappedLetters+= `<span id={index} className="underline">${str[index]}</span>`
                    }
                    if(str[index]!==' ')
                    wrappedLetters+= `<span id={index}>${str[index]}</span>`
                    else 
                    wrappedLetters+= `<span id={index} style={{display: 'inline-block', fontsize: '24px', color: '#000000', background: '#cccccc', borderRadius:'6px', padding: '10px 20px'}}>•</span>`
            
                }
                
                let tempEle=document.createElement('p')
                tempEle.innerHTML=wrappedLetters
            // newElement.innerHTML = wrappedLetters;
                document.getElementById("textcontainer").innerHTML=tempEle.innerHTML;
            //how to add shadow dom to content for undeliningx
        },[context.i,context.ii]);



        useEffect(()=>{
            //  remove the  underline class of prev element and add underline class to currEle
            const prevEle = document.getElementsByClassName("underline");
            if(prevEle.length===0)
            {   
                const containerChildren=  document.getElementById("textcontainer");
                containerChildren.children[context.currEle].classList.add("underline");
                return ;
            }
            else if(prevEle.length!==0)
            prevEle[0].classList.remove("underline");

            //now add underline class to currEle
            const containerChildren=  document.getElementById("textcontainer");
            containerChildren.children[context.currEle].classList.add("underline");
        },[context.currEle])
        

        return(
            <>
            <div id="textcontainer"></div>
            </>
        )
    }
    
    export default TextContainer;
    
  
   


    //export paraChanger
    // export {
    //     paraChanger,
    //     nextChar
    // }