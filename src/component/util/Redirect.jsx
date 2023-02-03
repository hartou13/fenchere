import React, { Component } from 'react';
import NavFrontOffice from '../../page/NavFrontOffice';
class Redirect extends Component {
    state = {  } 
    redirect=()=>{
        window.location.replace("/conn");
    }
    render() { 
        return (
            <div>
                <NavFrontOffice></NavFrontOffice>
                <h3>Vous n'etes pas connecté, Connecter vous d'abord</h3>
                <button className="btn btn-primary" onClick={this.redirect}>Vers connexion</button>
            </div>
        );
    }
}
 
export default Redirect;