import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link to="/">Volver a la página principal</Link>
    </div>
  );
}

export default NotFoundPage;
