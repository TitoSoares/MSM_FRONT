import { useState, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import "../../Componentes/estyle/estilonew.css" 
import { UsuarioLogadoContext } from "../../contexts/contextAuth";

function Agenda(){

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);



    return(
        <div className="DivTela">
            <FuncaoCabecalho/>

            
            <div className="bodyy">
                 <BarraLateral/>
                <div className="container">
                    <h1>Agenda</h1>

                    <h2>Histórico de Eventos</h2>
                    <ul className="event-list">
                        {/* {events.map((event, ix) => (
                        <li key={index}>{event}</li>
                        ))} */}
                    </ul>

                    <h2>Adicionar Evento</h2>
                    <form>
                        <input
                        type="text"
                        placeholder="Digite seu evento..."
                        />
                        <input type="submit" value="Adicionar Evento" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Agenda