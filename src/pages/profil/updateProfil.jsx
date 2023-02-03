import React, { Component } from 'react';
import URLHelper from '../../Helper/URLHelper';
import FetchHelper from '../../Helper/FetchHelper';
import md5 from 'md5';
import NavFrontOffice from '../../page/NavFrontOffice';
import ConsultationSold from '../../component/ConsultationSolde';
export default class UpdateProfil extends Component {
    state = { 
        user:
        {
            refUtilisateur:"UT001",
            email:"test@example.com",
            mdp:"test",
            nom:"testUtilisateur1",
            prenom:"uuuuu",
            dateDeNaissance:"1995-01-17"

        }
     } 
    constructor(){
        super();
    }
    

    handleSubmit=async (event)=>{
        event.preventDefault();
        let form = document.getElementById("user");
        let formData = new FormData(form);
        formData.set('id',localStorage.getItem("idUser"));
        let mdp=formData.get('mdp');
        formData.append('mdp',md5(mdp));
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        console.log(object);
        let response=await FetchHelper.getDataPut(URLHelper.urlgen("users"), object);
        console.log(response);
        if("error" in response){
            console.log(({ erreur: response.error.message}))
        }
        else{
            window.location.replace("/");
        }
    }
    render() { 
        if(localStorage.getItem("idUser")==null)
            window.location.replace("/redirect");
        return (
            <React.Fragment>
                <NavFrontOffice></NavFrontOffice>
                <ConsultationSold utilisateur={localStorage.getItem("idUser")} ></ConsultationSold>
                            <form id='user' >
                                    <p>Email :
                                    <input  placeholder=" " name="email" id='field' defaultValue={this.state.user.email} onChange={(e) => this.setState({ user: { ...this.state.user, email: e.target.value}}) }/>
                                    </p>
                                    <p>Mot de passe :
                                    <input type="password" placeholder=" " name='mdp' id='field' defaultValue={this.state.user.mdp} onChange={(e) => this.setState({ user: { ...this.state.user, mdp: e.target.value}}) }/>
                                    </p>
                                    <p>Nom :
                                    <input  placeholder=" " name="nom" id='field' defaultValue={this.state.user.nom} onChange={(e) => this.setState({ user: { ...this.state.user, nom: e.target.value}}) }/>
                                    </p>
                                    <p>Prenom :
                                    <input   placeholder=" " name="prenom" id='field' defaultValue={this.state.user.prenom} onChange={(e) => this.setState({ user: { ...this.state.user, prenom: e.target.value}}) }/>
                                    </p>
                                    <p>Date de naissance :
                                    <input  placeholder=" " name="dateDeNaissance" id='field' defaultValue={this.state.user.dateDeNaissance} onChange={(e) => this.setState({ user: { ...this.state.user, dateDeNaissance: e.target.value}}) }/>
                                    </p>
                                    <button type='submit' className="btn btn-success" onClick={this.handleSubmit}>Enregistrer</button>
                            </form>
            </React.Fragment>
        );
    }
}