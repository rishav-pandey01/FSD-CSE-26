
import"./Items.css"

const Items = (props) => {
  return (
    <div className="card">
        <img src={image} width={100} height={100} alt="React Logo" />
       <h2>Title: {props.title}</h2>
       <h3>Price:₹{props.price}</h3>
       <button className="btn">Add to Cart</button>
    </div>
  )
}

export default Items
