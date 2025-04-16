export default  function Formulaire({ handleSubmit }) {
    return (
        <div >
            <h1 className="text-center text-white">VOS PUBLICATIONS</h1>
            <div className="bg-secondary p-5 rounded " id="page_principale" >
            <form className=" p-5 rounded bg-light" id="formulaire" onSubmit={handleSubmit}>
                    <div className="form-group row m-5">
                        <label  className="col-sm-2 col-form-label text-dark">Titre:</label>
                        <div className="col-10">
                            <input type="text" className="form-control" id="title" placeholder="Titre"/>
                        </div>
                    </div>
                    <div className="form-group row m-5">
                        <label className="col-sm-2 col-form-label text-dark">Auteur: </label>
                        <div className="col-10">
                            <input type="text" className="form-control" id="author" placeholder="Auteur"/>
                        </div>
                    </div>
                    <div className="form-group row m-5">
                        <label  className="col-sm-2 col-form-label text-dark">Contenu:</label>
                        <div className="col-10">
                            <textarea id="content" name="content" placeholder="Écrivez ici..."
                                className="form-control mb-2 col-md-6" required></textarea>
                        </div>
                    </div>

                    <div className="form-group row m-5  ">
                        <div className="col-12 d-flex justify-content-end ">
                            <button type="submit" id="submit" className="btn btn-primary">Publier</button>
                        </div>
                    </div>
                    

                </form>
            </div>
   </div>
       
    );
}