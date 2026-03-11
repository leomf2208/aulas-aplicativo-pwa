import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css"

function Cabecalho() {
    return <header className="cabecalho__root">
        <img src="vite.svg" alt="logo" /> 
    <div className="cabecalho__avatar"> TC </div>
    <Avatar nome="Thiago Anastacio Cordeiro" /></header>;
    
}

export default Cabecalho;