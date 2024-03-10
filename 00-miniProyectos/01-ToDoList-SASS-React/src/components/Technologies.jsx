import React from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import sassLogo from "../assets/sass.svg"

export default function Technologies() {
    return (
        <>
         <div className='header__cont-logos'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="header__cont-logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="header__cont-logo" alt="React logo" />
        </a>
        <a href="https://sass-lang.com/" target="_blank">
            <img src={sassLogo} className="header__cont-logo" alt="Sass logo" />
        </a>
      </div>
        </>
    )
}