"use client";
import { useEffect, useState } from "react";

export default function BlogDetails({ id }) {
  const [blogDetails, setBlogDetails] = useState([]);
  const [error, setError] = useState(null);
 

  async function getPublicationById() {
    try {
      const response = await fetch('http://localhost:3001/publications/' + id);
      if (!response.ok) {
        throw new Error("Échec de la récupération de la publication");
      }
      const data = await response.json();
      setBlogDetails(data);
    } catch (err) {
      setError("Erreur lors de la récupération de la publication");
    }
  }
  useEffect(() => {
    getPublicationById();
  },[]);
console.log(blogDetails);
  return (
    <>
      <div className="row">
        <img src={blogDetails.image} alt="Logo" className="imageBlog" />
      </div>
      <div className="row">
        <h1 className="text-primary text-center">{blogDetails.title}</h1>
        <p className="text-white">{blogDetails.description}</p>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <figure className="text-center">
            <img src={blogDetails.image} alt="Logo" className="img-fluid" />
            <figcaption className="mt-2 text-primary fs-3">La belle fleur</figcaption>
          </figure>
        </div>
        <p className="text-white">{blogDetails.description}</p>
      </div>
    </>
  );
}
