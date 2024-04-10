import "../estyle/estilonew.css"
import { useContext } from "react"
import { Link } from "react-router-dom";
import { UsuarioLogadoContext } from "../../contexts/contextAuth";

function FuncaoCabecalho(){
    
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);
    
    return(
        <div>
            <header className="HeadCabecalho">
            
                <div><img className="ImgCabecalho" src="MSM_logo.png"/></div>

                <div className="DivCabecalho">
              
                    <div className="ItemCabecalho"><Link className="LinkCabecalho" to="/">Home</Link></div>
                    <div className="ItemCabecalho"><Link className="LinkCabecalho" to="/tutorial">Como criar uma MEI</Link></div>
                    <div className="ItemCabecalho"><Link className="LinkCabecalho" to="/gov">Funções Gov</Link></div>

                    { UsuarioLogadoCtx?.idusuario &&
                    <div className="ItemCabecalho"><Link className="LinkCabecalho" to="/gen">Gerenciamento</Link></div>
                    }
                    { !UsuarioLogadoCtx?.idusuario &&
                    <div className="ItemCabecalho"><Link className="LinkCabecalho" to="/login">Login</Link></div>
                    }
                    
                </div>

            </header>

        </div>
    )
}

export default FuncaoCabecalho;