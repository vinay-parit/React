import React from 'react'
import "../index.css";

const Events = () => {
  // const btnClicked = () =>{
  //   console.log("button is clicked");

  // }
  return (
    <div>
      <button
        onClick={() => {
          console.log("button is clicked");
        }}

        onMouseEnter={()=>{console.log("mouse entered");
        }}

        onMouseLeave={()=>{console.log("mouse leave");
        }}
        className="btn"
      >
        click me
      </button>
    </div>
  );
}

export default Events