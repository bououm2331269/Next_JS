import { useEffect, useState } from "react";
import Localbase from 'localbase';

export default function AddComment({ id }) {
    const [commentContent, setCommentContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const db = new Localbase('db');

    const saveCommentToIndexedDB = (comment) => {
        db.collection('commentaires').add(comment);
    };

    const syncLocalCommentsWithServer = async () => {
        try {
            const localComments = await db.collection('commentaires').get();
            for (const comment of localComments) {
                const response = await fetch(`http://localhost:3001/commentaires?idPublication=${comment.idPublication}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(comment),
                });

                if (response.ok) {
                    console.log('Commentaire synchronisé avec succès');
                } else {
                    console.warn('Erreur lors de la synchronisation du commentaire');
                }
            }
        } catch (error) {
            console.error('Erreur de synchronisation des commentaires :', error);
        }
    };

    useEffect(() => {
        syncLocalCommentsWithServer();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccess(false);

        const newComment = {
            idPublication: id,
            datePublication: new Date().toISOString(),
            contenu: commentContent,
        };

        saveCommentToIndexedDB(newComment);

        try {
            const response = await fetch(`http://localhost:3001/commentaires?idPublication=${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
            });

            if (!response.ok) {
                throw new Error('Une erreur est survenue lors de l’envoi du commentaire.');
            }

            await response.json();
            setSuccess(true);
            setCommentContent('');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="add-comment">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Votre commentaire..."
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        required
                        rows="4"
                    />
                </div>

                <div className="d-flex justify-content-end mt-3">
                    <button type="submit" className="btn btn-primary rounded" disabled={isSubmitting}>
                        {isSubmitting ? 'Envoi...' : 'Ajouter'}
                    </button>
                </div>
            </form>
            {error && <p className="text-danger">Erreur : {error}</p>}
            {success && <p className="text-success">Commentaire ajouté avec succès !</p>}
        </div>
    );
}
