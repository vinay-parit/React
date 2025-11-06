
//useState Hook => useState hook is used for updating the state 


import { useState } from "react";
import "./index.css"

const App = () => {

  const [count, setCount] = useState(0)

  function increaseCount(){
      setCount(count+1)
  }

  function decreaseCount() {
    if(count>0){
      setCount(count - 1);
    }
    
  }
  return (
    <div className="h-[100vh] w-full bg-zinc-400 flex items-center justify-center">
      <div className="counter bg-red-300 p-10">
        <h1 className="text-6xl">People Counter</h1>
        <div className="values flex mt-10">
          {/* <button
            onClick={decreaseCount}
            className="px-8 py-2 bg-zinc-700 text-white rounded-xl text-5xl"
          >
            -
          </button> */}

          <button
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
            className="px-8 py-2 bg-zinc-700 text-white rounded-xl text-5xl"
          >
            -
          </button>
          <p className="text-5xl px-20">{count}</p>
          {/* <button onClick={increaseCount} className="px-8 py-2 bg-zinc-700 text-white rounded-xl text-5xl">
            +
          </button> */}

          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="px-8 py-2 bg-zinc-700 text-white rounded-xl text-5xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App














// import React, { useState } from 'react'

// const App = () => {
//   const [name, setName] = useState("vinay")
//   return (
//     <div>{name}</div>
//   )
// }

// export default App


