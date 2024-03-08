import React, { Component } from "react";

export default class Eventos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
        };
        this.sumar = this.sumar.bind(this)
    }
    sumar(e) {
        console.log("Sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }
    render() {
        return(
            <div>
                <h2>Eventos en Componentes de Clase</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}