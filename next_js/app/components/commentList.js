import { useEffect, useState } from "react";
import Comment  from "./comment";
export default function CommentList({id}){
    const [commentaires, setCommentaires] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/commentaires?idPublication=${id}`)
            .then(response => response.json())
            .then(data => setCommentaires(data))
            .catch(error => console.error(error));
    }, [commentaires]);   
    if (!commentaires) {
        return <div>Loading...</div>;
    }
    
    return (
        <div id="commentaires" className="row" >    
            {commentaires.map(comment => (
               <Comment commentaire={comment.contenu} image="../image/user-square.png" key={comment.id} />
            ))}
        </div>
    );
}