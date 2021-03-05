import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState([initial]);

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

