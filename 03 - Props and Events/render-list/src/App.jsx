import Child from "./components/Child";

const App = () => {
  const user = [
    { id: "1", name: "vinay", lastName: "begar" },
    { id: "2", name: "akash", lastName: "agasur" },
    { id: "3", name: "vinay", lastName: "parit" },
  ];
  return (
    <div>
      {/* {console.log(user[0].name)}
      <h2>{user[0].name + " " + user[0].lastName}</h2>
      <h2>{user[1].name + " " + user[1].lastName}</h2>
      <h2>{user[2].name + " " + user[2].lastName}</h2> */}

      {/* {
        user.map((item, index)=>{
          return (
            <div key={index}>
              <span>{item.name}</span>
              <span>{item.lastName}</span>
            </div>
          );
        })
      } */}

      {/* {
        user.map((user, index)=>{
          return <Child key={index} name={user.name} lastName={user.lastName} />;
        })
      } */}

      {user.map((user) => (
        <Child {...user} key={user.id} />
      ))}
    </div>
  );
}

export default App