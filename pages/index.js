import Link from "next/link";
import Titulo from "../components/Titulo.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <Titulo>Página Inicial</Titulo>
      <Link href="/sobre" className="btn btn-primary">
        Ir para página sobre
      </Link>
      <Link href="/tempo" className="btn btn-danger">
        Ir para página Tempo
      </Link>
    </div>
  );
}
export default Home;
