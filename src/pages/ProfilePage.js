import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProfilePage() {
  // const { name } = useParams();

  const { params } = useParams();

  return (
    <main>
      <Header />
      <h1>Página acerca do usuário {params}</h1>
    </main>
  );
}

export default ProfilePage;
