import React, { useState } from "react";

export default function ToDoList() {
    const [tarea, setTarea] = useState({
        nombre: "",
        descripcion: "",
        status: true
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

  return (
    <section className="section__ToDoList">
      <div className="ToDoList__cont-1">
        <h3>Empieza agregando tareas al tablero...</h3>
        <form onSubmit={handleSubmit} className="ToDoList__cont-1__form">
          <div className="cont-1__form-div">
            <label htmlFor="nombre">Nombre de la tarea:</label>
            <input onChange={handleChange} value={tarea.nombre} type="text" name="nombre" placeholder="*Campo obligatorio" />
          </div>
          <div className="cont-1__form-div">
            <label htmlFor="descripcion">Escribe la descripción:</label>
            <input onChange={handleChange} value={tarea.description} type="text" name="descripcion" />
          </div>
          <div className="cont-1__form-div">
          <input type="submit" />
          </div>
        </form>
      </div>

      <div className="ToDoList__cont-2">
        <p>No hay tareas...</p>
      </div>
    </section>
  );
}
