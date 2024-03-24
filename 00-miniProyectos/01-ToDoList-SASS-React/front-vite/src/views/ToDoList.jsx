import React, { useEffect, useState } from "react";
import { Tareas } from "../components/Tareas";

export default function ToDoList() {

    const [tarea, setTarea] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState({ nombre: "", descripcion: "", status: true });
  
    const handleTaskNameChange = (taskId, newTaskName) => {
      const updatedTasks = tarea.map(task => task.id === taskId ? { ...task, nombre: newTaskName} : task )
      setTarea(updatedTasks)
    }

    const crearTarea = (data) => {
      const nuevaTarea = {
        id: Date.now(),
        ...data
      }
      setTarea([
        ...tarea,
        nuevaTarea
      ])
      setNuevaTarea({ nombre: "", descripcion: "", status: true });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        crearTarea(nuevaTarea)
    }

    const handleChange = (e) => {
        setNuevaTarea({
            ...nuevaTarea,
            [e.target.name]: e.target.value
        })
    }

  return (
    <section className="section__ToDoList">
      <div className="ToDoList__cont-1">
        <h3>Empieza agregando tareas al tablero.</h3>
        <form onSubmit={handleSubmit} className="ToDoList__cont-1__form">
          <div className="cont-1__form-div">
            <label htmlFor="nombre">Nombra tu tarea:</label>
            <input onChange={handleChange} value={nuevaTarea.nombre} type="text" name="nombre" placeholder="*Campo obligatorio" required />
          </div>
          <div className="cont-1__form-div">
            <label htmlFor="descripcion">Escribe la descripción:</label>
            <input onChange={handleChange} value={nuevaTarea.descripcion} type="text" name="descripcion" />
          </div>
          <div className="cont-1__form-div">
          <input type="submit" />
          </div>
        </form>
      </div>

      <div className="ToDoList__cont-2">
        { tarea.length
        ? tarea.map((item) => (<Tareas key={item.id} id={item.id} nombre={item.nombre} descripcion={item.descripcion} status={item.status} onNameClick={handleTaskNameChange} />))   
        : <p>No hay tareas...</p> }
      </div>
    </section>
  );
}