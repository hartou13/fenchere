import React, { Component } from 'react';
import "./../assets/css/nav.css";
import logo from './../component/default.png';
import ConsultationSold from '../component/ConsultationSolde';
class NavFrontOffice extends Component {
    state = {  } 
    unlog=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("idUser");
        localStorage.removeItem("idAdmin");
    }
    render() { 
        return (<div className="navCategorie">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
                <img src={logo} width="12%" alt="logo"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <a href="/search"><button id="btn-nav" className="btn" >recherche</button></a>
                        </li>

                        <li className="nav-item">
                            <a href="/uba"><button id="btn-nav" className="btn" >mes encheres</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/"><button id="btn-nav" className="btn" >listes encheres</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/updateProfil"><button id="btn-nav" className="btn" >mettre à jour le profil</button></a>
                        </li>
                       
                        <li className="nav-item">
                            <a href="/"><button id="btn-nav" className="btn" onClick={this.unlog}>déconnexion</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <br />
        
    </div>);
    }
}
 
export default NavFrontOffice;