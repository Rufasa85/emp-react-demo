import React,{useState}from 'react'
import "./style.css"

export default function EmpForm(props) {
  const [name, setName] = useState("");
  const [units, setUnits] = useState(0);
  const [color, setColor] = useState("#c0ffee")

  const handleSubmit = e=>{
    e.preventDefault();
    const newEmp = {
      name:name,
      units:parseInt(units),
      favColor:color
    }
    props.addEmp(newEmp)
    setName("")
    setUnits(0);
    setColor("#c0ffee")
  }

  return (
    <form className="EmpForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="name"  value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="number" name="" value={units} onChange={e=>setUnits(e.target.value)}/>
      <input type="color" name="" value={color} onChange={e=>setColor(e.target.value)}/>
      <button>Add Employee</button>
    </form>
  )
}
