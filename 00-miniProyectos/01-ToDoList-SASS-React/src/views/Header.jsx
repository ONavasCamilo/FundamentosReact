import React from 'react';
import Technologies from '../components/Technologies';

export default function Header() {
    return (
        <>
        <header className='header'>
            <div className='header__cont-title'>
        <h1 className='header__cont-h1'>To Do List con Sass y React</h1> 
            </div>
           <Technologies />
        </header>
        </>
    )
}