import Perfil from "../components/Perfil";
import { useNavigate} from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate()
  
  const handleNavigate = () =>
    {
        navigate('/');
    }

  return (
    <>
      <nav className='nav-header bg-dark'>
        <button className='button-sesion btn btn-sucess' onClick={handleNavigate}>Volver</button>
      </nav>
      <Perfil />
    </>
  );
};

export default UserProfile;