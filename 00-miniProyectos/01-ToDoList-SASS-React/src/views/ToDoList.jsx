import React from 'react';

export default function ToDoList() {
    return(
        <section className='section__ToDoList'>
            <div>
                <h3>Empieza agregando tareas al tablero..</h3>
                <form>
                    <div>
                    <label htmlFor="tarea">Nombre de la tarea</label>
                    <input type="text" name='tarea' placeholder='*Campo obligatorio'/>
                    </div>
                    <div>
                        <label htmlFor="descripcion">Escribe la descripción</label>
                        <input type="text" name='descripcion'/>
                    </div>
                    <input type="submit" />
                </form>
            </div>

            <div>
                <p>No hay tareas</p>
            </div>
        </section>
    )
}