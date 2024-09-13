import{ React,useContext} from 'react';
import './keyboard.css'
import './screentext'
import  paras from './paragraphs'
import scontext from './Context';
import { wrapperFunction } from './screentext';
const  {nextChar,paraChanger}= wrapperFunction();


function  Keyboard(){
    const context=useContext(scontext)



function handleKeyDown(e){
//pass text on screen to the keyboard->note text should be array of strings(coz for each character of keyboard many paras will be there.(will import data of paras)
//also pass setter function of keybased para
//move all functions and events to separe module of textRendering

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



//screen animation showing which key pressed;




if(context.i==paras.length){check_accuracy(context.allTypedEntries,context.unCorrectedErrors);}
else if(context.ii==(paras[context.i]).length){check_accuracy(context.allTypedEntries,context.unCorrectedErrors); }
else {
    context.unCorrectedErrors++;
//we wait until correct character is not typed

}

if(e.key==paras[context.i][context.ii]){nextChar();}

}


    


return (
    <>
    
    <div class="grid-container">
  <div class="grid-item button" onKeyDown={handleKeyDown}>1</div>  // apply 'button' classname to all buttons;
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  

  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  

  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  


  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  


  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  

</div>


    
    </>
);
}

export default Keyboard;
