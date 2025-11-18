
const Forms = () => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">Enter Your Name</label>
        <input
          onChange={(val) => {
            console.log(val.target.value);
          }}
          type="text"
          name="name"
          id="name"
        />
      </form>
    </div>
  );
};

export default Forms;
