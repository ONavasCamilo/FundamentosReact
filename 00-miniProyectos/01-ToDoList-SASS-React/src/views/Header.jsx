import React from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import "../../styles/App.scss"

export default function Header() {
    return (
        <>
        <header className='header'>
            <div className='header__cont-title'>
        <h1 className='header__cont-h1'>To Do List con Sass y React</h1> 
            </div>
            <div className='header__cont-logos'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="header__cont-logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="header__cont-logo" alt="React logo" />
        </a>
      </div>
      <p>mas texto de prueba</p>
        </header>
        </>
    )
}