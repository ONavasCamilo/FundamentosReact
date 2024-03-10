import React from 'react';

export const Tareas = ({ nombre, descripcion, status }) => {
    return(
        <div>
            <span>{nombre}</span>
            <span>{descripcion}</span>
            <span>{status ? 'Activa' : 'Inactiva'}</span>
        </div>
    )
}