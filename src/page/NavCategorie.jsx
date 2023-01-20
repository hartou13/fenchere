import React, { Component } from 'react';
import "./../assets/css/nav.css";
import logo from './../assets/img/profile.png';
class NavCategorie extends Component {
    state = {  } 
    unlog=()=>{
        localStorage.removeItem("token");
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
                            <a href="/liste"><button id="btn-nav" className="btn">Voir la liste des categories</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/add"><button id="btn-nav" className="btn">Ajouter une nouvelle categorie</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/update"><button id="btn-nav" className="btn">Mettre à jour les categories</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/stat"><button id="btn-nav" className="btn">Statistiques</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/listUser"><button id="btn-nav" className="btn">Liste de utilisateur</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/histo"><button id="btn-nav"  className="btn">Historique mouvement</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/listAuction"><button id="btn-nav"  className="btn">Voir enchere en cours</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/updateAdmin"><button id="btn-nav"className="btn">Profil Admin</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/nv"><button id="btn-nav" className="btn">Element à valider</button></a>
                        </li>
                        <li className="nav-item">
                            <a href="/updateCommi"><button id="btn-nav" className="btn">Mettre à jour la commission</button></a>
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
 
export default NavCategorie;