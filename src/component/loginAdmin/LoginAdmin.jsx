import React, { Component } from 'react';
import URLHelper from '../../Helper/URLHelper';
import FetchHelper from '../../Helper/FetchHelper';
import './../../assets/css/LoginAdmin.css'
class LoginAdmin extends Component {
    state = { 
        erreur:""
     } 
    handleSubmit=async (event)=>{
        event.preventDefault();
        let form = document.getElementById("login");
        let formData = new FormData(form);
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        console.log(object);
        let response=await FetchHelper.getDataPost(URLHelper.urlgen("ConnexionAdmin"), object);
        console.log(response);
        if("error" in response){
            this.setState({ erreur: response.error.message})
        }
        else{
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("idAdmin", response.data.idadmin);
            window.location.replace("/stat");
        }

    }
    render() { 
        return (
            <React.Fragment>  
                <div className='logAdmin card shadow '>
                    <div className='card-body row mt-md-5 mb-2'>
                        <div className='mb-2'>
                            <h2 className='titleLogin fw-bolder text-center'>Login admin</h2>
                            <br /><br />
                            <form action="" id='login' className='container d-flex flex-column justify-content-center align-items-center'>
                                <div className='formLogin' id='input'>
                                    <input className='inp' type="email" placeholder=" " name='email' id='field' value={"test@example.com"}/>
                                    <span className='labelInp'>Email :</span>
                                </div>
                                <hr />
                                <div className='formLogin' id='input'>
                                    <input className='inp' type="password" placeholder=" " name='mdp' id='field' value={"test"} />
                                    <span className='labelInp'>Mot de passe :</span>
                                </div>
                                <div>
                                    <p>{this.state.erreur}</p>
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
 
export default LoginAdmin;