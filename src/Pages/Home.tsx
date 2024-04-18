import { useNavigate } from "react-router-dom";
import FuncaoCabecalho from "../Componentes/Cabecalho";
import "../Componentes/estyle/estilonew.css"
function Home(){

    const navigate = useNavigate();

    const Navegar = () => {;
       navigate('/tutorial');
    }

    return(
        <div className="DivTela">

            <FuncaoCabecalho/>
        
            <h1 className="TxtMSM">Mei Sem Medo</h1>

            <div className="DivHome">
                
                <p className="TxtHome">Bem-vindo ao Mei Sem Medo, um projeto dedicado a descomplicar o processo de abertura e gestão de Microempreendedor Individual (MEI). Nossa missão é proporcionar a orientação e ferramentas necessárias para que empreendedores possam estabelecer e administrar sua MEI com confiança e tranquilidade.</p>
                <button onClick={Navegar} className="ButtonHome">Saiba Mais</button>

            </div>

        </div>
    )
}
export default Home;