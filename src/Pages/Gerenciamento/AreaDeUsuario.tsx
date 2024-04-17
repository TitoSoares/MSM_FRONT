import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import "../../Componentes/estyle/estilonew.css" 
import { UsuarioLogadoContext } from "../../contexts/contextAuth";

function AreaDeUsuario(){
    
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);
    

    const navigate = useNavigate();
    const [nome, setNome]=useState("")
    const [email, setEmail]=useState("")
    const [senha, setSenha]=useState("")
    const id: string = UsuarioLogadoCtx?.idusuario ?? '';

    function handleClick(){
        navigate('/login');
    }

    function handleNomeInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    function handleSenhaInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }

    const AlterarLogin = async () => {
        {
            let json = await api.Alterar(id, nome, senha, email);
            console.log(json)
            
            if (json.return) {
                alert('Usuario Cadastrado');
            } else {
                alert(json.message);
            }        
        }
    }

    const Excluir = async () => {
        {
            let json = await api.Excluir(id);
            console.log(json)
            
            if (json.return) {
                alert('Usuario Removido');
                sessionStorage.setItem('ContextName', '');
                UsuarioLogadoCtx?.setidusuario('')
                navigate('/')
            } else {
                alert(json.message);
            }        
        }
    }

    const handleLogout = () => {
        sessionStorage.setItem('ContextName', '');
        UsuarioLogadoCtx?.setidusuario('')
        navigate('/')
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
                <div className="bodyBarra">
                    <BarraLateral/>
                    <div className="bodyo">
                        <div className="container">
                            <section className="user-info">
                                <h2>Detalhes do Usuário</h2>
                                <p><strong>Nome:</strong> {UsuarioLogadoCtx?.nome}</p>
                                <p><strong>Email:</strong> {UsuarioLogadoCtx?.email}</p>
                                <p><strong>CPF:</strong> {UsuarioLogadoCtx?.cpf}</p>
                                <p><strong>CNPJ:</strong> {UsuarioLogadoCtx?.cnpj}</p>
                                <button className="ButtonArea" onClick={handleLogout}>Sair</button>
                                <button className="ButtonArea1" onClick={Excluir}>Excluir Conta</button>
                            </section>

                            <section className="user-info">
                                <div className="DivCadastro">

                                <p><strong>Alterar cadastro</strong></p> <br />
                            
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

                                    <button className="ButtonCadastro" onClick={AlterarLogin}>Alterar</button>

                            </div>
                            </section>
                        </div>

                        
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
export default AreaDeUsuario