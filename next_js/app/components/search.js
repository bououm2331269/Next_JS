export default function Search(){
    return(
        <div className="row">
            <div className="d-flex justify-content-between align-items-baseline flex-wrap p-2" >
                <form className="col-12 col-md-6 col-xl-6 mb-2 mb-md-0 " id="recherche">
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-search text-primary"></i>
                        </span>
                        <input type="text"  className="form-control bg-light"></input>
                    </div>
                </form>
            
                <div className="d-flex  align-items-baseline col-12 col-md-6 ml-md-auto" id="tri">
                    <label className="mb-5 mb-md-0 mr-5  col-6 text-white m-lg-5">Trier par:</label>
                    <select name="exemple" id="select" className="form-control w-50 w-md-85 bg-light">
                        <option value="">Select</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                </div>
            </div>           
        </div>        
    );
}