import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilonew.css"

import { UsuarioLogadoContext } from "../contexts/contextAuth";

function Gerenciamento(){

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    const navigate = useNavigate();
    function handleClick1(){
        navigate('/AreaDeUsuario');
    }
    function handleClick2(){
        navigate('/EntradaSaida');
    }
    function handleClick(){
        navigate('/login');
    }


    return(
        <div>        
            { !UsuarioLogadoCtx?.idusuario &&
            <div className="DivAcessoNegado">

                <FuncaoCabecalho/>
                <div className="DivButton404"><button className="ButtonNotFound" onClick={handleClick}>Login</button></div>

            </div>
            }

            { UsuarioLogadoCtx?.idusuario &&
            <div className="DivTela">
                <FuncaoCabecalho/>
                <div className="DivGerenciamento">
                    <div className="DivGen1" onClick={handleClick2}>
                        <h1>Entradas e Saidas</h1>            
                        <img className="imgGen" src="EntradaSaida_Gerenciamento.png"/>
                    </div>

                    {/* <a className="DivGen1" href="Agenda">
                        <h1>Agenda</h1>
                        <img className="imgGen" src="Agenda_Gerenciamento.png"/>
                    </a> */}
                </div>

                <div className="DivGerenciamento">
                    <div className="DivGen2" onClick={handleClick1}>
                        <h1>Area de Usuario</h1>
                        <img className="imgGen" src="User_Gerenciamento.png"/>
                    </div>
                </div>

            </div>
            }
        </div>
    )
}

export default Gerenciamento;