import React, { useState } from "react";
import "./Login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      setError("Por favor, completa todos los campos");
      setLoading(false);
      return;
    }

    const data = { email, password };

    try {
      const response = await fetch(
        "https://tienda-opal.vercel.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }

      const result = await response.json();
      console.log("login exitoso:", result);
      setLoading(false);
      navigate("/userprofile");
    } catch (error) {
      setError("Error al iniciar sesión");
      setLoading(false);
      console.log("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="login login-container">
      <div className="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1 className="title">Iniciar Sesión</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>o ingresa con tu cuenta</span>
            <div className="input-container">
              <input
                className="input-email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input-password"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href="#">Olvidaste tu contraseña?</a>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="sign-in-btn">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
