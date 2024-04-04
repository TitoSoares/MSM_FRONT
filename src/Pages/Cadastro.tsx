import FuncaoCabecalho from "../Componentes/Cabecalho"
import "../Componentes/estyle/estilonew.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api";

function Cadastro(){

    const navigate = useNavigate();
    const [msgApi, setmsgApi] = useState('');
    const [nome, setNome]=useState("")
    const [email, setEmail]=useState("")
    const [cpf, setCpf]=useState("")
    const [cnpj, setCnpj]=useState("")
    const [senha, setSenha]=useState("")
    
    function handleNomeInput(event: React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }
    function handleCpfInput(event: React.ChangeEvent<HTMLInputElement>) {
        setCpf(event.target.value);
    }
    function handleCnpjInput(event: React.ChangeEvent<HTMLInputElement>) {
        setCnpj(event.target.value);
    }
    function handleSenhaInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value);
    }

    const Cadastrar = async () => {
        {

 
            let json = await api.CriarConta(nome, email, cpf, cnpj, senha);
 
            if (json.return.ID) {
                alert('Conta Cadastrado');
               
                navigate('/Login');
            } else {
                setmsgApi(json.message);
            }      
        }
    }

    return(

        <div className="DivTela">
        
            <FuncaoCabecalho/>

            <div className="DivLinkCadastro">
                <Link className="LinkCadastro" to="/login">Já tem seu Login? Entre aqui</Link>
            </div>

            <div className="DivCadastro">

                
                <div className="DivInputCadastro">
                    <label className="LabelCadastro">Nome:</label>
                    <input className="InputCadastro" type="text" placeholder="Digite seu nome" onChange={handleNomeInput}/>
                </div>

                <div className="DivInputCadastro">
                    <label className="LabelCadastro">Email:</label>
                    <input className="InputCadastro" type="email" placeholder="Digite seu email" onChange={handleEmailInput}/>
                </div>

                <div className="DivInputCadastro">
                    <label className="LabelCadastro">CPF:</label>
                    <input className="InputCadastro" type="CPF" placeholder="Digite seu CPF" onChange={handleCpfInput}/>
                </div>

                <div className="DivInputCadastro">
                    <label className="LabelCadastro">CNPJ:</label>
                    <input className="InputCadastro" type="CPNJ"placeholder="Digite seu CNPJ" onChange={handleCnpjInput}/>
                </div>

                <div className="DivInputCadastro">
                    <label className="LabelCadastro">Senha:</label>
                    <input className="InputCadastro" type="Senha" placeholder="Digite sua senha" onChange={handleSenhaInput}/>
                </div>
        
                <button className="ButtonCadastro" onClick={Cadastrar}>Cadastrar</button>

            </div>

        </div>

    )
}
export default Cadastro