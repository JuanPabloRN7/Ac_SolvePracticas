/* import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

import "./register.scss";

const Register = () => {
  const { signup } = useAuth();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: "",
    name: "",
    idNumber: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      console.log(userData); 
      await signup(
        userData.email,
        userData.password,
        userData.idNumber, // cedula
        userData.name, // nombre
        userData.phoneNumber, // telefono
        userData.username
      );
      
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Registro</h1>
          <form onSubmit={handleSubmit}>
  <input
    name="idNumber"
    type="text"
    placeholder="Cédula"
    onChange={(e) =>
      setUserData({ ...userData, idNumber: e.target.value })
    }
  />
  <input
    name="phoneNumber"
    type="text"
    placeholder="Celular"
    onChange={(e) =>
      setUserData({ ...userData, phoneNumber: e.target.value })
    }
  />
  <input
    name="username"
    type="text"
    placeholder="Nombre de usuario"
    onChange={(e) =>
      setUserData({ ...userData, username: e.target.value })
    }
  />
  <input
    name="name"
    type="text"
    placeholder="Nombre completo"
    onChange={(e) =>
      setUserData({ ...userData, name: e.target.value })
    }
  />
  <input
    name="password"
    type="password"
    placeholder="Contraseña"
    onChange={(e) =>
      setUserData({ ...userData, password: e.target.value })
    }
  />
  <input
    name="email"
    type="email"
    placeholder="Email"
    onChange={(e) =>
      setUserData({ ...userData, email: e.target.value })
    }
  />
  <button>Registrar</button>
</form>

          {error && <p>{error}</p>}
        </div>
        <div className="left">
          <h1>Login</h1>
          <p>Ingresar</p>
          <span>Si ya tienes cuenta, ingresa</span>
          <Link to="/login">
            <button>Login/Ingresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
*/

import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

import "./register.scss";

function Register() {
  const { signup, currentUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cedula: "",
    nombre: "",
    telefono: "",
    username: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, cedula, nombre, telefono, username } = formData;
    await signup(email, password, cedula, nombre, telefono, username);
  };

  // If the user is already logged in, redirect to Home
  if (currentUser) {
    return <Navigate to="/" />;
  }

    return (
      <div className="register">
        <div className="card">
          <div className="right">
            <h1>Registro</h1>

            <form onSubmit={handleSubmit}>


              <input
                type="text"
                name="telefono"
                placeholder="Teléfono"
                onChange={handleInputChange}
                required
              />
                            <input
                type="text"
                name="cedula"
                placeholder="Cédula"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleInputChange}
                required
              />
                            <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                onChange={handleInputChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                required
              />
                            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                required
              />
              <button type="submit">Registrate</button>
            </form>

          </div>
           <div className="left">
          <h1>login</h1>
          <p>
           ingresar
          </p>
          <span>si ya tienes cuenta ingresa</span>
          <Link to="/login">
          <button>Login/ingresar</button>
          </Link>
        </div>
        </div>
      </div>
    );
  
  
}

export default Register;
