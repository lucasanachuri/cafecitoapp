import React from "react";
import { Navigate } from "react-router-dom";

const EncapsularRutas = ({ children }) => {
  //aqui agrego la logica q deben cumplir quienes vas a observer las paginas del admin
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarioLogueadow")) || null;
  //preguntar si esta vacio ese usuario logueado
  if (!usuarioLogueado) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    //si esta todo ok
    return children;
  }
};

export default EncapsularRutas;
