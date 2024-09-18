
import { useContext,React, useState } from 'react';
import paras from './components/paragraphs.js';
import Content from './components/content.js'
import  scontext from './components/Context.js'
function App() {
  
  // i,ii,iii refer to 3-Dimensions of paras
  const [i,seti]=useState(0);
  const [ii,setii]=useState(0);
  const [iii,setiii]=useState(0);
  const [currEle,setCurrEle]=useState(0);
  const n=paras.length
  const allTypedEntries=0,unCorrectedErrors=0;
  const startTime=0;
  const correctlyTypedWords=0;
  const totalTypedWords=0;
  const [pressedKey, setPressedKey] = useState('');

  return (
   <scontext.Provider value={{paras,i,ii,iii,seti,setii,setiii,currEle,setCurrEle,n,allTypedEntries,unCorrectedErrors,startTime,correctlyTypedWords,totalTypedWords,pressedKey,setPressedKey}}>
    <Content/>
    {/* <Navbar/> */}
    </scontext.Provider>
  );
}

export default App;
