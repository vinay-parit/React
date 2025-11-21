import GrandChild from "./GrandChild";

const Child = (props) => {
  let { name, age, marks } = props;
  return (
    <div>
      <GrandChild name={name} age={age} marks={marks} >
        <h2>Hello! Deepika</h2>
        <h3>Hello! kadkad</h3>
        <h4>Kksksf</h4>
      </GrandChild>
    </div>
  );
};

export default Child;
