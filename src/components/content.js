import {React,useContext} from 'react'
import  ScreenText from './screentext'
import Keyboard from './keyboard'
import  paras from './paragraphs'
import scontext from './Context';
import { wrapperFunction } from './screentext';
import Keytrace from './keytrace'
const  {nextChar,paraChanger}= wrapperFunction();


export default function Content(){

const context=useContext(scontext)

function handleKeyDown(e){
  
console.log("key pressed:",context.pressedKey)
    
    function check_accuracy(allTypedEntries,unCorrectedErrors){
        let endTime=Date.now()
        let netTime=context.startTime-endTime;
        let GWPM=(allTypedEntries/5)/netTime;
    
        let NetWPM=GWPM-(unCorrectedErrors)/netTime;
        let accuracy = (context.correctlyTypedWords / context.totalTypedWords) * 100;
        if(accuracy>=90){
            //move to new letter 
           
            paraChanger();
        } 
         //else start loop over again for same key
         else{
            context.setii(0);
         
         }
    }
    
    
    if(context.i==paras.length){check_accuracy(context.allTypedEntries,context.unCorrectedErrors);}
    else if(context.ii==(paras[context.i]).length){check_accuracy(context.allTypedEntries,context.unCorrectedErrors); }
    
    if(context.pressedKey===paras[context.i][context.ii]){nextChar();} //e.key is also same as pressedKey
    else {
        //we wait until correct character is not typed
        context.unCorrectedErrors++;
    
    
    }
    
    }


    return(
        //onKeyDown={handleKeyDown}r
        <div   tabIndex={-1}>
        {/* <metrics/> */}
         <ScreenText/>
         <Keyboard/>
        </div>
       
    )
}
