
import "./style.css"

export default function Card(props) {
   
  return (
    <div className="Card" style={{background:props.favColor}}>
        <h2>{props.name}</h2>
        <h3>Unit sold: {props.units}</h3>
    </div>
  )
}
