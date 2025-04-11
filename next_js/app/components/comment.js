export default function Comment({commentaire,image}){
    return(
    <div className ="row">
        <div className="comment mt-5">
            <div>
                <img src= {image}  alt="Logo" className="image bg-primary ml-sm-2 mr-sm-2"></img>
            </div>
            <p className=" text-white " >
                ${commentaire} ${commentaire}<br></br>
            </p>
            
        </div>
     </div>   
    )
}