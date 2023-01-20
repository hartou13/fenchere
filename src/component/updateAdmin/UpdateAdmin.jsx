import React, { Component } from 'react';
import URLHelper from '../../Helper/URLHelper';
import FetchHelper from '../../Helper/FetchHelper';
import NavCategorie from '../../page/NavCategorie';
class UpdateAdmin extends Component {
    state = { 
        admin:
        {
            refAdmin: "AD001",
            email: "test@example.com",
            mdp: "",
            nom: "testAdmin",
            id: 1
        }
     } 
    constructor(){
        super();
    //    this.state = {inf:FetchHelper.getData(URLHelper.urlgen("api/Proformat_fournisseur_demande_ressource"))};
        this.listStat();
    }
    listStat=async ()=>{
        const val=await (FetchHelper.getData(URLHelper.urlgen("admin/"+localStorage.getItem("idAdmin"))));
        this.setState({admin:val.data.liste[0]});
        if("error" in val)
            window.location.replace("/")
        console.log(val.data);
        // console.log("hereeee");
    }
    handleSubmit=async (event)=>{
        event.preventDefault();
        let form = document.getElementById("admin");
        let formData = new FormData(form);
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        console.log(object);
        let response=await FetchHelper.getDataPut(URLHelper.urlgen("admin"), object);
        console.log(response);
        if("error" in response){
            console.log(({ erreur: response.error.message}))
        }
        else{
            // localStorage.setItem("token", response.data.token);
            // localStorage.setItem("idAdmin", response.data.idadmin);
            window.location.replace("/homeBackOffice");
        }

    }
    render() { 
        return (
            <React.Fragment>
                <NavCategorie/>
                <div className='logAdmin card shadow '>
                    <div className='card-body row mt-md-5 mb-2'>
                        <div className='mb-2'>
                            <h2 className='titleLogin fw-bolder text-center'>Update admin</h2>
                            <br /><br />
                            <form action="admin" id='admin' className='container d-flex flex-column justify-content-center align-items-center'>
                                <div className='formLogin' id='input'>
                                    <input className='inp' type="email" placeholder=" " name="email" id='field' value={this.state.admin.email} />
                                    <span className='labelInp'>Email :</span>
                                </div>
                                <hr />
                                <div className='formLogin' id='input'>
                                    <input className='inp' type="password" placeholder=" " name='mdp' id='field' value={this.state.admin.mdp} />
                                    <span className='labelInp'>Mot de passe :</span>
                                </div>
                                <hr />
                                <div className='formLogin' id='input'>
                                    <input className='inp' type="email" placeholder=" " name="email" id='field' value={this.state.admin.nom} />
                                    <span className='labelInp'>Nom :</span>
                                </div>
                                <br /><hr />
                                    <button className='btn buttonLogin' type='submit' onClick={this.handleSubmit}>Connexion</button>
                                </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default UpdateAdmin;