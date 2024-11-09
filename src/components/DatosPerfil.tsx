import "./DatosPerfil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const user = () => {
  let item = sessionStorage.getItem('user');
  return item ? JSON.parse(item) : null;
}

const userInfo = user();

const DatosPerfil = () => {
  const datos = {
    nombre: userInfo? userInfo.userName : '',
    correo: userInfo? userInfo.email : '',
    /*telefono: "123456789",
    direccion: "Av. Siempre Viva 123, Santiago, Chile",*/
  };

  return (
    <div className="datos-perfil-container">
      <h2 className="datos-perfil-title">Perfil de Usuario</h2>
      <section className="datos-perfil">
        {/* <h3>Datos del usuario</h3> */}
        <p>
          <FontAwesomeIcon icon={faUser} className="user-icon" /> Nombre:{" "}
          {datos.nombre}
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" /> Correo:{" "}
          {datos.correo}
        </p>
        {/*
        <p>
          <FontAwesomeIcon icon={faPhone} className="phone-icon" /> Teléfono:{" "}
          {datos.telefono}
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" />{" "}
          Dirección: {datos.direccion}
        </p>*/}
      </section>
    </div>
  );
};

export default DatosPerfil;
