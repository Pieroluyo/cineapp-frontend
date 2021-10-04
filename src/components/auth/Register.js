import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <div className="auth__content">
        <div>
          <h3 className="auth__title">Únete</h3>
          <p className="auth__parrafo mt-4">Completa tus datos y accede a nuestro</p>
          <form className="auth__formulario row">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Nombres"
                name="name"
                className="auth__input"
                autoComplete="off"
              />

              <select name="" id="">
                <option value="">Tipo de documento</option>
                <option value="DNI">DNI</option>
                <option value="RUC">RUC</option>
              </select>

              <input
                type="text"
                placeholder="Télefono"
                name="name"
                className="auth__input"
                autoComplete="off"
              />

              <input
                type="text"
                placeholder="Contraseña"
                name="name"
                className="auth__input"
                autoComplete="off"
              />

            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Apellidos"
                name="name"
                className="auth__input"
                autoComplete="off"
              />

              <input
                type="text"
                placeholder="Nº de documento"
                name="password2"
                className="auth__input"
              />

              <input
                type="password"
                placeholder="Correo electrónico"
                name="password"
                className="auth__input"
              />

              <input
                type="password"
                placeholder="Confirmar contraseña"
                name="password2"
                className="auth__input"
              />
            </div>
            <div className="col-lg-12">               
                <div className="auth__politica">
                    <div className="auth__politica__item">
                        <input type="checkbox" />
                        <label htmlFor="">Acepto los <a href="https://cdn.cineplanet.com.pe/contentAsset/raw-data/a468dacd-5eab-45d0-a2c1-d132dc8f7597">Términos y Condiciones</a> </label>                        
                    </div>
                    <div className="auth__politica__item">
                        <input type="checkbox" />
                        <label htmlFor="">Acepto recibir promociones, descuentos y publicidad de Cineplanet mediante el uso de datos personales brindados</label>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <button type="submit" className="btn btn__rojo">
                Register
                </button>   
            </div>        
          </form>
        </div>
      </div>
    </>
  );
};
