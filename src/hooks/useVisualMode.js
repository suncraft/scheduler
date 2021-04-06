import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState([initial]); //needs initial [] for the mode.slice at end

  //making this a [] instead of using: const [history, setHistory] = useState([initial]); <-- combines the two
  //since mode is an array now, it has it's own indexed history
  //and we RETURN the last item in that array as the most recent mode

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

  //https://stackoverflow.com/questions/45225973/array-slice-10-can-someone-explain
  //kind of explains (-1)[0], but links to mozilla anyway for array.slice
  return { mode: mode.slice(-1)[0], transition, back };
};

