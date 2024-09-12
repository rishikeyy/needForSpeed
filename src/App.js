
import { useContext,React, useState } from 'react';

import './components/content.js'
import  scontext from './components/Context.js'
function App() {
  
  const paras=Object.values(paras);
  const [i,seti]=useState(0);
  const [ii,setii]=useState(0);
  const [currEle,setCurrEle]=useState(0);
  const n=paras.length
  const allTypedEntries=0,unCorrectedErrors=0;
  const startTime=0;
  const correctlyTypedWords=0;
  const totalTypedWords=0;

  return (
   <scontext.Provider value={{paras,i,ii,seti,setii,currEle,setCurrEle,n,allTypedEntries,unCorrectedErrors,startTime,correctlyTypedWords,totalTypedWords}}>
    <content/>
    <navbar/>
    </scontext.Provider>
  );
}

export default App;
