import Link from "next/link";
import Titulo from "../components/Titulo.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Tempo(props) {
  console.log("> Passando pelo Frontend;");
  const dataDinamica = new Date();
  const dataDinamicaString = dataDinamica.toGMTString();

  return (
    <div>
      <div>
        <Titulo>Tempo</Titulo>
        <Link href="/" className="btn btn-danger">
          Ir para Página Inicial
        </Link>
      </div>
      <div>{dataDinamicaString} (dinâmico)</div>
      <div>{props.dataEstaticaString} (estático)</div>
    </div>
  );
}

export async function getStaticProps() {
  const dataEstatica = new Date();
  const dataEstaticaString = dataEstatica.toGMTString();

  return {
    props: {
      dataEstaticaString,
    },
  };
}

export default Tempo;
