import React, { useState } from 'react'

const App = () => {
    const [name, setName] = useState("vinay")
  return (
    <div className="str-parent">
      <div className="str-child">
        <input type="text" onChange={(val)=>{setName(val.target.value)}}/>
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default App