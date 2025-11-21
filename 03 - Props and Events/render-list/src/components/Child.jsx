const Child = (props) => {
    let {id, name, lastName} = props
  return (
    <div>
        <h2>id:{id}</h2>
        <h2>Name:{name}</h2>
        <h2>LastName:{lastName}</h2>
    </div>
  )
}

export default Child