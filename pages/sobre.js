import Link from "next/link";
import Titulo from "../components/Titulo.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Sobre() {
  return (
    <div>
      <Titulo> Sobre </Titulo>
      <Link href={"/"} className="btn btn-primary">
        Acessar a Página Inicial
      </Link>
    </div>
  );
}

export default Sobre;
