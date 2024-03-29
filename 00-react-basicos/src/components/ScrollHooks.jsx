import React, { useState, useEffect } from "react"

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        console.log("MOoviendo el Scroll");
        const detectarScroll = () => setScrollY(window.pageYOffset)
        window.addEventListener("scroll", detectarScroll)
        return () => {window.removeEventListener("scroll", detectarScroll)}
    }, [scrollY])

    useEffect(() => {
        console.log("Fase de montaje");
    }, [])

    useEffect(() => {
        console.log("Fase de actualización");
    })

    useEffect(() => {
        return () => {
            console.log("Fase de desmontaje");
        }
    })

    return(
        <>
        <h2> Hooks - useEffect y el ciclo de vida</h2>
        <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}