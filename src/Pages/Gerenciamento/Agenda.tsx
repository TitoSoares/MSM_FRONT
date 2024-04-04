import { useState, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import "../../Componentes/estyle/estilonew.css" 
import { UsuarioLogadoContext } from "../../contexts/contextAuth";

function Agenda(){

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);
    // const [events, setEvents] = useState([]);
    // const [eventInput, setEventInput] = useState('');
  
    // const handleInputChange = (e) => {
    //   setEventInput(e.target.value);
    // };
  
    // const handleAddEvent = (e) => {
    //   e.preventDefault();
    //   if (eventInput.trim() !== '') {
    //     setEvents([...events, eventInput]);
    //     setEventInput('');
    //   } else {
    //     alert('Por favor, insira um evento válido.');
    //   }
    // };

    return(
        <div className="DivTela">
            <FuncaoCabecalho/>
            {UsuarioLogadoCtx?.idusuario}
            
            {/* <div className="bodyuuu">
                 <BarraLateral/>
                <div className="container">
                    <h1>Agenda</h1>

                    <h2>Histórico de Eventos</h2>
                    <ul className="event-list">
                        {events.map((event, index) => (
                        <li key={index}>{event}</li>
                        ))}
                    </ul>

                    <h2>Adicionar Evento</h2>
                    <form onSubmit={handleAddEvent}>
                        <input
                        type="text"
                        value={eventInput}
                        onChange={handleInputChange}
                        placeholder="Digite seu evento..."
                        />
                        <input type="submit" value="Adicionar Evento" />
                    </form>
                </div>
            </div> */}
        </div>
    )
}
export default Agenda