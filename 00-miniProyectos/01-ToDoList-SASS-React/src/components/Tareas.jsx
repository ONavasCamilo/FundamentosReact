import React, { useState } from 'react';

export const Tareas = ({ nombre, descripcion, status }) => {
    const [estado, setEstado] = useState(status)
    const handleClickStatus = () => {
        setEstado(!estado)
    }
    return(
        <div className='ToDoList__cont-2__tareas'>
            <span className='cont-2__tarea-nombre'>{nombre}</span>
            {descripcion && (
                <span className='cont-2__tarea-descripcion'>
                    <strong>Descripción: </strong> {descripcion}
                </span>
            )}
            <button onClick={handleClickStatus} className={`cont-2__tarea-status ${estado ? 'activa' : 'inactiva'}`}>{estado
             ? 'Activa'
             : 'Inactiva'}
             </button>
        </div>
    )
}