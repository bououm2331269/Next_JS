
import { useState, useEffect } from 'react';
import Localbase from 'localbase';
import Formulaire from "./formulaire";

export default function AddPublication() {
  
    const [lastPublicationId, setLastPublicationId] = useState(null);
    const db = new Localbase('db'); 


    function generateDate() {
        const date = new Date();
        return date.toISOString();
    }

    const savePublicationToIndexedDB = (publication) => {
        db.collection('publications').add(publication); 
    };

    
    async function handleSubmit(event) {
       
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('content').value;
        const image = "/image/Peony-Radiation.jpg";
        const author = document.getElementById('author').value;
        const date = generateDate();

        const postData = {
            image: image,
            auteur: author,
            title: title,
            description: description,
            date: date
        };

        try {
           
            savePublicationToIndexedDB(postData);

            const response = await fetch('/api/publications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                throw new Error('Une erreur est survenue lors de l’envoi de la publication.');
            }

            const data = await response.json();
            console.log(data);
            getLastPublicationId();
        } catch (error) {
            console.error('Erreur lors de l\'envoi de la publication : ', error);
        }
    }

    async function getLastPublicationId() {
        try {
            const response = await fetch('http://localhost:3001/publications');
            const data = await response.json();
            console.log(data);

            const lastPublication = data[data.length - 1];
            const lastPublicationId = lastPublication.id;
            setLastPublicationId(lastPublicationId);
        } catch (error) {
            console.error(error);
        }
    }
    const syncLocalDataWithServer = async () => {
        try {
            const localPublications = await db.collection('publications').get();
            for (const publication of localPublications) {
                const response = await fetch('/api/publications', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(publication),
                });

                if (response.ok) {
                    console.log('Publication synchronisée avec succès');
                } else {
                    console.log('Erreur lors de la synchronisation');
                }
            }
        } catch (error) {
            console.error('Erreur de synchronisation avec le serveur : ', error);
        }
    };

    useEffect(() => {
        syncLocalDataWithServer();
    }, []);

    useEffect(() => {
        if (lastPublicationId) {
            window.location.href = `/blog/${lastPublicationId}`;
        }
    }, [lastPublicationId]);

    return (
        <>
            <Formulaire handleSubmit={handleSubmit} />
        </>
    );
}
