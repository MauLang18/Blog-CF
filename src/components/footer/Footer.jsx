import React, { useState, useEffect } from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Actualizar el año cada vez que cambie
    const intervalId = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60); // Actualiza cada hora (puedes ajustar el intervalo según tus necesidades)

    // Limpiar el intervalo cuando el componente se desmonte para evitar fugas de memoria
    return () => clearInterval(intervalId);
  }, []); // Solo se ejecuta una vez al montar el componente
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {year} Grupo Castro Fallas |{" "}
            <a
              href="https://customcodecr.com"
              className="text-blue-500 font-bold hover:text-blue-700"
              target="blank"
            >
              Desarrollado por CustomCodeCR
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
