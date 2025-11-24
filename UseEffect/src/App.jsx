import axios from "axios";
import { useEffect, useState } from "react";

//useEffect Hook -> animation, fetching the data, async tasks
const App = () => {
  //syntax
  //useEffect(()=>{},dependency array)

  // const [first, setfirst] = useState(0)

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json))
  // },[]);

  //dependency
  //0-> only run once
  //[] -> only once
  //[useState value] -> value renders then useEffect runs

  const [num, setNum] = useState(Math.floor(Math.random() * 200));
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/todos/${num}`).then((res) =>
      console.log(res)
    );
  }, []);

  return (
    <div>
      {num}
      {/* {first}
    <button onClick={()=>{setfirst(first+1)}}>add</button> */}
    </div>
  );
};

export default App;
