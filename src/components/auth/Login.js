import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
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
                        name="email"
                        className="auth__input"
                        autoComplete="off"
                        />

                        <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        className="auth__input"
                        />

                        <button type="submit" className="btn btn__rojo">
                        Ingresar
                        </button> 
                    </div>

                    <h4 className="auth__subtitulo">¿No eres socio?</h4>
                    <p className="auth__parrafo">Registrándote en nuestro programa Socio Cineplanet podrás acumular puntos en cada visita que realices y gozar de grandes beneficios.</p>

                    <Link to="/auth/register" className="auth__link">
                    Únete
                    </Link>
                </form>   
            </div> 
        </div>     
    </>
  );
};
