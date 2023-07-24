import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useForm } from 'react-hook-form';
import "./login.scss";
import swal from 'sweetalert';

function Login() {
  const { login, currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // initialise the hook
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formDataR, setFormDataR] = useState({
    email: "",
    password: "",
    cedula: "",
    nombre: "",
    telefono: "",
    username: "",
  });

  const handleInputChangeLogin = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitLogin = async (event) => {

    try {
      event.preventDefault();
      const { email, password } = formData;
      await login(email, password);
      mensajeOk("Bienvenido");
    } catch (error) {
      mensaje("Credenciales Invalidas")
    }

  };


  // If the user is already logged in, redirect to Home
  if (currentUser) {

    return <Navigate to="/" />;
  }

  const handleInputChangeRegister = (event) => {
    const { name, value } = event.target;
    setFormDataR({
      ...formDataR,
      [name]: value,
    });
  };

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    const { email, password, cedula, nombre, telefono, username } = formDataR;
    console.log(formDataR);
    await signup(email, password, cedula, nombre, telefono, username);
  };
  const mensaje = (texto) => swal(
    {
      title: "Error",
      text: texto,
      icon: "error",
      button: "Aceptar",
      timer: 2000
    }
  );

  const mensajeOk = (texto) => swal(
    {
      title: "Ingresado Correctamente",
      text: texto,
      icon: "success",
      button: "Aceptar",
      timer: 2000
    }
  );

  return (
    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img
            src="https://www.comparaonline.com.co/blog-statics/co/uploads/2016/08/parqueadero-publico-1.jpg"
            alt=""
          />
          <div className="text"></div>
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Iniciar Sesión</div>
            <form onSubmit={handleSubmitLogin}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"

                    placeholder="Ingresa tu correo electrónico"
                    onChange={handleInputChangeLogin}
                    required
                  />

                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"

                    name="password"
                    placeholder="Ingresa tu contraseña"
                    onChange={handleInputChangeLogin}
                    required
                  />

                </div>
                <div className="button input-box">
                  <input type="submit" value="Iniciar Sesión" />
                </div>
                <div className="text sign-up-text">
                  ¿No tienes una cuenta?{" "}
                  <label htmlFor="flip">¡Regístrate ahora!</label>
                </div>
              </div>
            </form>
          </div>
          <div className="signup-form">
            <div className="title">Registro</div>
            <form onSubmit={handleSubmitRegister}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Ingresa tu nombre completo"
                    onChange={handleInputChangeRegister}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="cedula"
                    placeholder="Ingresa tu número de cédula"
                    onChange={handleInputChangeRegister}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="telefono"
                    placeholder="Ingresa tu número de teléfono"
                    onChange={handleInputChangeRegister}
                    required
                  />
                </div>

                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="username"
                    placeholder="Ingresa tu nombre de usuario"
                    onChange={handleInputChangeRegister}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="email"
                    name="email"a
                    placeholder="Ingresa tu correo electrónico"
                    onChange={handleInputChangeRegister}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    onChange={handleInputChangeRegister}
                    required
                  />
                </div>

                <div className="button input-box">
                  <input type="submit" value="Registrar" />
                </div>
                <div className="text sign-up-text">
                  ¿Ya tienes una cuenta?{" "}
                  <label htmlFor="flip">¡Inicia sesión ahora!</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
