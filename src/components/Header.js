import { goToHomePage, goToLoginPage, goToProfilePage } from "../Router/coordinator";
import { useNavigate } from "react-router-dom"

function Header() {

  const navigate = useNavigate()

  return (
    <header>
      <button onClick={()=> goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={()=> goToProfilePage(navigate, "Mariana")}>
        Ir para página de perfil
      </button>
      <button onClick={()=> goToLoginPage(navigate)}>
        Ir para página de login
      </button>
    </header>
  );
}

export default Header;
