
export default function Header(){
    return (
        <div className="d-flex justify-content-between m-2">
            <a href="http://localhost:3000">
            <img src="../image/logo.PNG" alt="Logo" width="100" height="100"  className="m-3"></img>
            </a>
            
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-item nav-link active m-5 bg-secondary rounded text-primary" href="http://localhost:3000/formulaire">Ajout publication </a>
                        <a className="nav-item nav-link m-5 bg-secondary rounded text-primary" href="#">Menu2</a>
                        <a className="nav-item nav-link m-5 bg-secondary rounded text-primary" href="#">Menu3</a>
                        <a className="nav-item nav-link disabled m-5 bg-secondary rounded text-primary" href="#">Menu4</a>
                        <img src="../image/user.png" alt="Logo" width="100" height="100" className="m-2"></img>
                    </div>
                </div>   
            </nav>
        </div>      
    )
}
