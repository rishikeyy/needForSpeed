import {React,useContext} from 'react'
import  ScreenText from './screentext'
import Keyboard from './keyboard'
import  paras from './paragraphs'
import scontext from './Context';

//import Keytrace from './keytrace'



export default function Content(){

const context=useContext(scontext)

function handleKeyDown(e){
  
console.log("key pressed:",e.key)

if (e.key === ' ') {
    e.preventDefault();
  }


    //here setting i leads to re-render with previous ii and prev currEle-> leading to outofBound error
    function paraChanger(){
    context.seti(context.i+1);
    if(context.i===context.n)context.seti(context.i-1);//feed last key data if all keys are mastered and data is exhauasted
    context.setCurrEle(0);
    context.setii(0);
    context.allTypedEntries=0;
    context.startTime=0;
    context.correctlyTypedWords=0;
    context.totalTypedWords=0;
    }

  function nextChar(){

        let newiii=context.iii+1
        

        if(newiii===paras[context.i][context.ii].length){
            context.setiii(0);
            context.setii(context.ii+1)
            context.setCurrEle(0)
            newiii=0
        }
        if(context.ii===paras[context.i].length){
            paraChanger();
        }
        context.allTypedEntries++;
        
        context.setCurrEle(newiii)
        context.setiii(newiii)
        
        
        }













    
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
    

    if(e.key===paras[context.i][context.ii][context.iii]){nextChar();} 
    else {
        //we wait until correct character is not typed
        context.unCorrectedErrors++;
    
    
    }
    
    }


    return(
        //onKeyDown={handleKeyDown} 
        <div onKeyDown={handleKeyDown}  tabIndex={-1}>
        {/* <metrics/> */}
         <ScreenText/>
         <Keyboard/>
        </div>
       
    )
}
