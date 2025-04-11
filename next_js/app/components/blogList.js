"use client";
import { useEffect, useState } from "react";
import BlogCard from "./blogCard";

export default function BlogList() {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  async function getPublications() {
    try {
      const response = await fetch("/api/publications");
      const data = await response.json();
      setPublications(data);
    } catch (err) {
      setError("Erreur lors de la récupération des publications");
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    getPublications();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div id="publications" className="row">
      {publications.map((publication) => (
        
        <div className="card-col"  key={publication.id}>
          <BlogCard 
            id={publication.id}
            title={publication.titre}
            description={publication.description}
            image={publication.image}
            date={publication.date}
          />
        </div>
      ))}
    </div>
  );
}
