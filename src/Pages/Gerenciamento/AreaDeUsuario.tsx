import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import "../../Componentes/estyle/estilonew.css" 
import { UsuarioLogadoContext } from "../../contexts/contextAuth";

function AreaDeUsuario(){
    
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    const navigate = useNavigate();
    const [msgApi, setmsgApi] = useState('');
    const [nome, setNome]=useState("")
    const [email, setEmail]=useState("")
    const [senha, setSenha]=useState("")

    function handleNomeInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    function handleSenhaInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }

    const handleLogout = () => {
        sessionStorage.setItem('ContextName', '');
        UsuarioLogadoCtx?.setidusuario('')
        navigate('/')
    }

    return(
        
        <div className="DivTela">
            <FuncaoCabecalho/>
            <div className="bodyBarra">
                <BarraLateral/>
                <div className="bodyo">
                    <div className="container">
                        <section className="user-info">
                            <h2>Detalhes do Usuário</h2>
                            <p><strong>Nome:</strong> Fulano de Tal</p>
                            <p><strong>Email:</strong> fulano@example.com</p>
                            <p><strong>CPF:</strong> TESTE</p>
                            <p><strong>CNPJ:</strong> TESTE</p>
                            <button className="ButtonCadastro" onClick={handleLogout}>Sair</button>
                        </section>

                        <section className="user-info">
                            <div className="DivCadastro">

                                Alterar cadastro <br /><br />
                        
                                <div className="DivInputCadastro">
                                    <label className="LabelCadastro">Nome:</label>
                                    <input className="InputCadastro" placeholder="Digite seu nome" onChange={handleNomeInput}/>
                                </div>

                                <div className="DivInputCadastro">
                                    <label className="LabelCadastro">Email:</label>
                                    <input className="InputCadastro" placeholder="Digite seu email" onChange={handleEmailInput}/>
                                </div>

                                <div className="DivInputCadastro">
                                    <label className="LabelCadastro">Senha:</label>
                                    <input className="InputCadastro" type="password" placeholder="Digite sua senha" onChange={handleSenhaInput}/>
                                </div>

                                <button className="ButtonCadastro">Alterar</button>

                           </div>
                           </section>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}
export default AreaDeUsuario