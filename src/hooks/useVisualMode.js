import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState([initial]);

  //default params
  const transition = function (newMode, replace = false) {
    if (replace) {
      const replacedMode = [...mode]
      replacedMode.pop();
      replacedMode.push(newMode);
      setMode(replacedMode);
    } else {
      setMode([...mode, newMode])
    }
  }

  const back = function () {
    const poppedArr = [...mode];
    console.log("poppedArr", poppedArr);

    if (poppedArr.length > 1){
      poppedArr.pop();
      setMode(poppedArr);
    }

    setMode(poppedArr);
    return;
  }

  return { mode: mode.slice(-1)[0], transition, back };
};

