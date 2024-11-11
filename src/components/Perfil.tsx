import DatosPerfil from "./DatosPerfil";
import HistorialPedidos from "./HistorialPedidos";
import { useState } from "react";
import "../css/Perfil.css";

const Perfil = () => {
  const [activeComponent, setActiveComponent] = useState("DatosPerfil");
  
  return (
    
    <div className="perfil-container">
      <section className="sidebar">
        <a href="#" onClick={() => setActiveComponent("DatosPerfil")}>
          <i className="fa-solid fa-user"></i>{" "}
          <span className="user-profile">Perfil de Usuario</span>
        </a>

        <a
          href="#"
          onClick={() => {
            setActiveComponent("HistorialPedidos");
          }}
        >
          <i className="fas fa-shopping-cart"></i>{" "}
          <span className="order-history">Historial de Pedidos</span>
        </a>
      </section>

      <div className="content">
        {activeComponent === "DatosPerfil" && <DatosPerfil />}
        {activeComponent === "HistorialPedidos" && <HistorialPedidos />}
      </div>
    </div>
  );
};

export default Perfil;
