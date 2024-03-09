import React, { useState } from "react"

export default function ContadorHooks(props) {
    const [contador, setContador] = useState(0)
    // console.log(useState);
    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    return (
        <>
        <h1>Hooks - useState</h1>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <p>Contador de {props.titulo}</p>
        <h3>{contador}</h3>
        </>
    )
}

ContadorHooks.defaultProps = {
    titulo: "Clicks",
}