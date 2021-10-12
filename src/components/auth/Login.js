
import React,{ useRef, useState } from "react";
import { Link } from "react-router-dom";
import { sining } from "../../services/auth/login";
import cargando from "../precarga/cargando";

//alertify 

import * as alertify from 'alertifyjs';

export const Login = () => {
  const txt_user = useRef();
  const txt_password = useRef();

  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sining(txt_user.current.value,txt_password.current.value).then((response) => {
        if(!response.data.ok) {
            alertify.notify(response.data.message, 'error',5);

            if( response.data.errors ) {
                if (response.data.errors.password ) 
                   txt_password.current.style.border = "2px #A31624 solid";
                else
                   txt_password.current.style.border = "1px #0B3665 solid";
                
                if (response.data.errors.user ) 
                   txt_user.current.style.border = "2px #A31624 solid";
                else
                   txt_user.current.style.border = "1px #0B3665 solid";
            }
        }


        setUser();
        //setProductos(response.data);
        //setCargando(false);
    });
  };


  return (
    <>
      <div className="auth__content auth__content--width">
        <div className="">
          <h3 className="auth__title">Iniciar Sesión</h3>
          <p className="auth__parrafo mt-4">
            Ingresa a tu cuenta para disfrutar de tus beneficios, acumular
            puntos y vivir al máximo la experiencia Cineplanet
          </p>

          <form className="auth__formulario">
            <div className="cuadro">
              <input
                type="text"
                placeholder="Nº de Socio Cineplanet"
                name="txt_user"
                ref ={txt_user}
                className="auth__input"
                autoComplete="off"
              />

              <input
                type="password"
                placeholder="Contraseña"
                name="txt_password"
                className="auth__input"
                ref={txt_password}
              />

              <button type="button" onClick={handleSubmit} className="btn btn__rojo">
                Ingresar
              </button>
            </div>

            <h4 className="auth__subtitulo">¿No eres socio?</h4>
            <p className="auth__parrafo">
              Registrándote en nuestro programa Socio Cineplanet podrás acumular
              puntos en cada visita que realices y gozar de grandes beneficios.
            </p>

            <Link to="/auth/register" className="auth__link">
              Únete
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
