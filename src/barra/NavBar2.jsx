import { Link } from "react-router-dom";

export default function NavBar2() {
  return (
    <nav>
      {/*El nombre dentro de to es el nombre de la URL no tiene que ver con el nombre del componente---*/}
      <Link to="/login">login</Link> |<Link to="/info">info</Link> |
      <Link to="/profile">profile</Link> |
    </nav>
  );
}
