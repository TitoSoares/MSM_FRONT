import { abort } from "process";
import { useState,useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import BarraLateral from "../../Componentes/BarraLateral"
import FuncaoCabecalho from "../../Componentes/Cabecalho"
import "../../Componentes/estyle/estilonew.css" 
import { UsuarioLogadoContext } from "../../contexts/contextAuth";
import { OperacaoType } from "../../Types/operacao";



function EntradaSaida(){

    const navigate = useNavigate();
    const [operacao, setOperacao] = useState('');
    const [valor, setValor] = useState('');    
    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);
    
    function handleClick(){
        navigate('/login');
    }
  
    const handleAddOperation = async () => {   
        try{
            const idUsuarioTratado: string = UsuarioLogadoCtx?.idusuario ?? '';
            if (operacao == ""){
                throw new Error('Selecione uma operação')                        
            }
            if (valor == ""){
                throw new Error('Selecione um Valor valido')                        
            }


            let json = await api.AdiconarOperacao(operacao.toLowerCase() === "true", Number(valor), idUsuarioTratado);
            // console.log(json)
            if (json.id) {
                alert('Operação Adicionado com sucesso!')    
                CarregarHistorico() 

            } else {
                alert('Falha ao adicionar Operação ' + json.message)
            } 

        }     
        catch(error) {            
            alert(error)   
        }
    }


    
    const [Lista, setLista] = useState<OperacaoType[]>([])
    const [ValorTotal, setValorTotal] = useState(0)
    const [idsSelecionados, setIdsSelecionados] = useState<string[]>([]);

    const handleSelecionarID = (id: string) => {
        if (idsSelecionados.includes(id)) {
            setIdsSelecionados(idsSelecionados.filter((selectedId) => selectedId !== id));
        } else {
            setIdsSelecionados([...idsSelecionados, id]);
        }
    };

    const exibirIdsSelecionados = () => {
        alert(`Ids selecionados: ${idsSelecionados.join(', ')}`);
    }

    const Deletar = async () => {
        {
            idsSelecionados.forEach(async idatual => {
                let json = await api.ExcluirOperação(idatual);
                console.log(json)
                if (json.message) {
                    alert(json.message)    
                    CarregarHistorico() 
                }
            });
            
            
    }
    }

    const CarregarHistorico = async () => {

        const idUsuarioTratado: string = UsuarioLogadoCtx?.idusuario ?? '';

        let json = await api.Lista(idUsuarioTratado)
        console.log(json)
        setLista(json.ListaEntradaSaida)
        setValorTotal(json.Total)

    }
    useEffect(() => {
        CarregarHistorico() 
    }, [])
   

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
                <div className="bodyy">
                    <BarraLateral/>
                    <div className="container">
                        <div className="input-section">
                            <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="true">Entrada</option>
                            <option value="false">Saida</option>
                            </select>
                            
                            <input type="number" placeholder="Digite um valor" value={valor} onChange={(e) => setValor(e.target.value)}/>
                            
                            <button onClick={handleAddOperation}>Enviar</button>
                        </div>
                        <div className="history">
                            <p><strong>Histórico:</strong></p>
                            <div className="ab">
                            {Lista?Lista.map((Lista) => (
                                <div key={Lista.ID}>
                                    <li className="te"> <input className="check" type="checkbox"
                                    checked={idsSelecionados.includes(Lista.ID)}
                                    onChange={() => handleSelecionarID(Lista.ID)}/>       {Lista.TIPO?'Entrada':'Saida'} no valor de R${Lista.VALOR}</li> 
                                </div>
                            )):''}
                            
                            {Lista?                                 
                             <div className="testestes"><strong>Valor Total:</strong> R${ValorTotal} <button className="ButtonArea1" onClick={Deletar}>Delete</button></div>:''  }
                            </div>


                        </div>
                    </div>
                </div>
            </div>      
            }
        </div>  
    )
}
export default EntradaSaida;