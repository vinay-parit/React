//react bolta hai tum log DOM ko directly update mat karo.
//tum log react ko batao ki konsa element update karna hai.
//wo react sambhal lega.

import { useState } from "react";

//react will update the elements by using useStates.

//Hooks - Functions

//useState -> element ka value update
//useContext -> advanced props ke liye
//useEffect -> animation, data fetching
//useRef -> reference of a variable
//useMemo -> optimization

const State_Basics = () => {
  // syntax:
  // const [initial_value, update_fn] = useState(starting_value)
  let [num, setNum] = useState(0);

  return (
    <div className="og">
      <div className="parent">
        <button
          onClick={() => {
            if (num > 0) {
              setNum(num-1);
            }
          }}
        >
          -
        </button>
        <h1>{num}</h1>
        <button
          onClick={() => {
            setNum(num+1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default State_Basics;
