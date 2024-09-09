import React from 'react';
import './keyboard.css'
import './screentext'

//pass text on screen to the keyboard->note text should be array of strings(coz for each character of keyboard many paras will be there.(will import data of paras)
//also pass setter function of keybased para


//move all functions and events to separe module of textRendering

function check_accuracy(allTypedEntries,unCorrectedErrors){
	endTime=Date.now()
	netTime=startTime-endTime;
	GWPM=(allTypedEnries/5)/netTime;

	NetWPM=GWPM-(unCorrectedErrors)/netTime;
    let accuracy = (correctlyTypedWords / totalTypedWords) * 100;
    if(accuracy>=90){
        //move to new letter 
       
        paraChanger();
    } 
	 //else start loop over again for same key
     else{
            setii(0);
     
     }
}

function handleKeyDown(e){

//screen animation showing which key pressed;




if(i==len(paras)){check_accuracy();}
else if(ii==len(paras[i])){check_accuracy(); }
else {
unCorrectedErrors++;
//we wait until correct character is not typed

}

if(e.key==paras[i][ii]){nextChar();}

}

function  Keyboard(){
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
