import { Link } from "react-router-dom";
import "../estyle/estilonew.css"

function BarraLateral(){
    return(
  
        <div className="DivTelaGerenciamento">

            <div className="BarraLateral">
                <h1 className="BarraLateralTitulo">Menu</h1>
                <ul className="MenuBarraLateral">
                    <li className="ItemBarraLateral"><Link className="LinkLateral" to="/Gerenciamento">Home</Link></li>
                    <li className="ItemBarraLateral"><Link className="LinkLateral" to="/EntradaSaida">Entradas/Saidas</Link></li>
                    <li className="ItemBarraLateral"><Link className="LinkLateral" to="/AreaDeUsuario">Usuario</Link></li>
                    {/* <li className="ItemBarraLateral"><a className="LinkLateral" href="Agenda">Agenda</a></li> */}
                </ul>
            </div>
        </div>

    )
}

export default BarraLateral;