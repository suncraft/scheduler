import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState([initial]); //[history, setHistory] needs another useState???

  //default params
  const transition = function (newMode, replace = false) {
    if (replace) {
      const replacingMode = [...mode]
      replacingMode.pop();
      replacingMode.push(newMode);
      setMode(replacingMode);
    } else {
      setMode([...mode, newMode])
    }
  }


  const back = function () {
    const arr = [...mode];
    if (arr.length > 1){
      arr.pop();
      setMode(arr);
    }

    setMode(arr);
    return;
  }

  return { mode: mode.slice(-1)[0], transition, back };
};

