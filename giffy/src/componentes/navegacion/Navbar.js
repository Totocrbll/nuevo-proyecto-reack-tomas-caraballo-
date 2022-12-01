import React from "react";

const Navbar =() =>  {

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                     <img src="./juegosLogo.png" width='70'/>
                     <a  className="navbar-brand text-light" href="#">Tienda de Juegos  </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                             <a className="nav-link active text-light" aria-current="page" href="#">Inicio</a>
                             <a className="nav-link active text-light" aria-current="page" href="#">Productos</a>  
                        </div>

                        <div> 
                            <button className="bg-dark">
                                <img src="./carrito.png" width='70'/>
                                <spam className="item-total text-light">0</spam>
                            </button>                       
                        </div>

                    </div>

                </div>

            </nav> 
            
        </div>
    );
}
export default Navbar