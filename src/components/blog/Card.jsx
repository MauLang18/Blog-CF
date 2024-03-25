import React, { useState, useEffect } from "react";
import "./blog.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios"; // Importa Axios

export const Card = () => {
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get(
          "https://api.logisticacastrofallas.com/api/Noticia"
        );
        setNoticias(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching noticias:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "es-ES",
      options
    );
    return formattedDate;
  };

  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {noticias.length > 0 ? (
            noticias
              .filter((item) => item.estado === 1) // Filtra solo los elementos con estado igual a 1
              .map((item) => (
                <div className="box boxItems" key={item.id}>
                  <div className="img">
                    <img src={item.imagen} alt="" />
                  </div>
                  <div className="details">
                    <Link to={`/details/${item.id}`} className="link">
                      <h3>{item.titulo}</h3>
                    </Link>
                    <p>{item.contenido.slice(0, 180)}...</p>
                    <div className="date">
                      <AiOutlineClockCircle className="icon" />{" "}
                      <label htmlFor="">
                        {formatDate(item.fechaCreacionAuditoria)}
                      </label>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div>No hay noticias disponibles en este momento.</div>
          )}
        </div>
      </section>
    </>
  );
};
