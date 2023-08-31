import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [text, SetText] = useState("")
  const [radio, setRadio] = useState('Baja')
  
  function textHandler(event) {
     SetText(event.target.value);
     
  }



  function radioHandler (event) {
    setRadio(event.target.value);
    
  }

  function addNewTask (event) {
    const newTask = {description: text, prioridad: radio, completed: false};
    setToDoList([...toDoList, newTask]) 
    
  }

  console.log(toDoList)

 


  return (
    <>
    <div className='flex'>
     <div className="mainContainer">
      <div className="row">
        <div className="col-6 options">

         
         {toDoList.map(item => (
          <li type='checkbox' className={item.prioridad} id="{item.description}">{item.description}</li> 
         ))}
        
        </div>
        <div className="col-6 p-5">
          <h1>Nuevo pendiente</h1>
          <input type="text" name="pendiente" id="" value={text} onChange={textHandler} />

          <h2>Prioridad:</h2>
          <label htmlFor="Baja">Baja</label>
          <input type="radio" name="priridad" id="Baja" value="Baja" defaultChecked onChange={radioHandler}/>
          <label htmlFor="Media">Media</label>
          <input type="radio" name="priridad" id="Media" value="Media" onChange={radioHandler}/>
          <label htmlFor="paraAyer">Para-Ayer!!!</label>
          <input type="radio" name="priridad" id="paraAyer" value="paraAyer" onChange={radioHandler}/>
          

          <button onClick={addNewTask }>Guardar</button>
        </div>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
