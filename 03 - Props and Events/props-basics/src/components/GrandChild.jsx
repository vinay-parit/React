const GrandChild = (props) => {
  let { name, age, marks, children } = props;
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <h1>Marks:{marks}</h1>
      {children}
    </div>
  );
};

export default GrandChild;
