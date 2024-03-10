import React from 'react';

export const Tareas = ({ nombre, descripcion, status }) => {
    return(
        <div className='ToDoList__cont-2__tareas'>
            <span className='cont-2__tarea-nombre'>{nombre}</span>
            <span className='cont-2__tarea-descripcion'>{descripcion}</span>
            <span className='cont-2__tarea-status'>{status ? 'Activa' : 'Inactiva'}</span>
        </div>
    )
}