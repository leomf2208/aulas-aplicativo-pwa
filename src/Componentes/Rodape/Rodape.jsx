import "./Rodape.css"

function Rodape(){

    const anoAtual = new Date().getFullYear();




    return <footer className="rodape__root"> "Copyright © {anoAtual} - Todos os direitos reservados Leonardo Martins Ferreira" </footer>
}
export default Rodape;
