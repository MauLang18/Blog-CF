import React, { useState, useEffect } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export const DetailsPages2 = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.logisticacastrofallas.com/api/Empleo/${id}`
        );
        setBlogDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  return (
    <>
      {blogDetails ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img src={blogDetails.imagen} alt="" />
            </div>
            <div className="right">
              <h1>{blogDetails.titulo}</h1>
              <h3>{blogDetails.puesto} </h3>
              <p>{blogDetails.descripcion}</p>
              <p>Autor: Grupo Castro Fallas</p>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
