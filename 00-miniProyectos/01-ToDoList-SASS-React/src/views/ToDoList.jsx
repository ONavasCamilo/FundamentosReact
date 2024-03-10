import React, { useEffect, useState } from "react";
import DB_TAREAS from "../helpers/bd_tareas"
import { Tareas } from "../components/Tareas";

export default function ToDoList() {

    const [tarea, setTarea] = useState(DB_TAREAS)
    const [nuevaTarea, setNuevaTarea] = useState({ nombre: "", descripcion: "", status: true });
    const [editingTaskId, setEditingTaskId] = useState(null); // ID de la tarea en modo de edición
    const [editedTaskName, setEditedTaskName] = useState(""); // Nombre editado de la tarea


    const handleTaskNameClick = (taskId, taskName) => {
      setEditingTaskId(taskId);          // Activamos el modo de edición para la tarea con el ID proporcionado
      setEditedTaskName(taskName);       // Inicializamos el nombre editado con el nombre actual de la tarea
    };

    const crearTarea = (data) => {
      setTarea([
        ...tarea,
        data
      ])
      setNuevaTarea({ nombre: "", descripcion: "", status: true });
      console.log(DB_TAREAS)
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
        <h3>Empieza agregando tareas al tablero...</h3>
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
        ? tarea.map((item, index) => (<Tareas key={index} nombre={item.nombre} descripcion={item.descripcion} status={item.status}/>))   
        : <p>No hay tareas...</p> }
      </div>
    </section>
  );
}