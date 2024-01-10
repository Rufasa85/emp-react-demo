import React, {useState,useEffect} from 'react'
import Card from "./components/Card"
import EmpForm from "./components/EmpForm"
import "./App.css"

function App() {
  const [employees, setEmployees] = useState([
    {
        id:1,
        name:"Joe Rehfuss",
        favColor:"#c0ffee",
        units:100
    },
    {
        id:2,
        name:"BaShiva TheCats",
        favColor:"#bada55",
        units:1
    },
    {
        id:3,
        name:"Arra isThebest",
        favColor:"#bada55",
        units:10000
    },
    {
      id:4,
      name:"Sir Reginald Floofbottom III",
      favColor:"#eeeeee",
      units:1
  },
  ])
  const [displayedEmployees,setDisplayedEmployees] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortTerm,setSortTerm] = useState("")

useEffect(() => {
 setDisplayedEmployees(employees)
}, [])

useEffect(() => {
 const filteredEmployees = employees.filter(emp=>{
  return emp.name.includes(searchTerm)
 })
 setDisplayedEmployees(filteredEmployees)
}, [searchTerm])

useEffect(() => {
  if(!sortTerm){
    return
  } else if(sortTerm==="name"){
    const sortedData =displayedEmployees.toSorted((a,b)=>{
      if(a.name>b.name){
        return 1
      } else {
        return -1
      }
    })
    setDisplayedEmployees(sortedData)
  }else if(sortTerm==="units"){
    const sortedData =displayedEmployees.toSorted((a,b)=>{
      if(a.units<b.units){
        return 1
      } else {
        return -1
      }
    })
    setDisplayedEmployees(sortedData)
  }
}, [sortTerm])


  const addEmployee = obj=>{
    setEmployees([...employees,obj])
    console.log('employees', employees)
  }

  return (
    <>
      <EmpForm  addEmp={addEmployee}/>
      <hr/>
      <h2>Filter employees:</h2>
      <input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}/>
      <h2>Sort employees:</h2>
      <button onClick={()=>setSortTerm("name")}>By name</button>
      <button onClick={()=>setSortTerm("units")}>By units</button>
      <div className="flexy">
        {displayedEmployees.map(emp=><Card key={emp.id} name={emp.name} units={emp.units} favColor={emp.favColor}/>)}
      </div>
    </>
  )
}

export default App
