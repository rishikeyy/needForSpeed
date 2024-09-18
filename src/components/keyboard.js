import{ React,useContext} from 'react';
import './keyboard.css'
import './screentext'
import  paras from './paragraphs'
import scontext from './Context';



function  Keyboard(){
//     const context=useContext(scontext)



// function handleKeyDown(e){
// //pass text on screen to the keyboard->note text should be array of strings(coz for each character of keyboard many paras will be there.(will import data of paras)
// //also pass setter function of keybased para
// //move all functions and events to separe module of textRendering

// function check_accuracy(allTypedEntries,unCorrectedErrors){
// 	let endTime=Date.now()
// 	let netTime=context.startTime-endTime;
// 	let GWPM=(allTypedEntries/5)/netTime;

// 	let NetWPM=GWPM-(unCorrectedErrors)/netTime;
//     let accuracy = (context.correctlyTypedWords / context.totalTypedWords) * 100;
//     if(accuracy>=90){
//         //move to new letter 
       
//         paraChanger();
//     } 
// 	 //else start loop over again for same key
//      else{
//         context.setii(0);
     
//      }
// }



// //screen animation showing which key pressed;




// if(context.i==paras.length){check_accuracy(context.allTypedEntries,context.unCorrectedErrors);}
// else if(context.ii==(paras[context.i]).length){check_accuracy(context.allTypedEntries,context.unCorrectedErrors); }
// else {
//     context.unCorrectedErrors++;
// //we wait until correct character is not typed

// }

// if(e.key==paras[context.i][context.ii]){nextChar();}

// }


    

return (
    <>
    
    <div className="grid-container" >
  <div className="grid-item button" >1</div>  
  <div className="grid-item">2</div>
  <div className="grid-item">3</div>  
  <div className="grid-item">4</div>
  <div className="grid-item">5</div>
  <div className="grid-item">6</div>  
  <div className="grid-item">7</div>
  <div className="grid-item">8</div>
  <div className="grid-item">9</div>  

  <div className="grid-item">1</div>
  <div className="grid-item">2</div>
  <div className="grid-item">3</div>  
  <div className="grid-item">4</div>
  <div className="grid-item">5</div>
  <div className="grid-item">6</div>  
  <div className="grid-item">7</div>
  <div className="grid-item">8</div>
  <div className="grid-item">9</div>  

  <div className="grid-item">1</div>
  <div className="grid-item">2</div>
  <div className="grid-item">3</div>  
  <div className="grid-item">4</div>
  <div className="grid-item">5</div>
  <div className="grid-item">6</div>  
  <div className="grid-item">7</div>
  <div className="grid-item">8</div>
  <div className="grid-item">9</div>  


  <div className="grid-item">1</div>
  <div className="grid-item">2</div>
  <div className="grid-item">3</div>  
  <div className="grid-item">4</div>
  <div className="grid-item">5</div>
  <div className="grid-item">6</div>  
  <div className="grid-item">7</div>
  <div className="grid-item">8</div>
  <div className="grid-item">9</div>  


  <div className="grid-item">1</div>
  <div className="grid-item">2</div>
  <div className="grid-item">3</div>  
  <div className="grid-item">4</div>
  <div className="grid-item">5</div>
  <div className="grid-item">6</div>  
  <div className="grid-item">7</div>
  <div className="grid-item">8</div>
  <div className="grid-item">9</div>  

</div>


    
    </>
);
}

export default Keyboard;
