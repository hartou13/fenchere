import { Component } from "react";
import URLHelper from "../Helper/URLHelper";
import './../assets/css/addCategorie.css'
import logo from './../assets/img/default.png';
class AddCategorie extends Component{
    
    state={
        nom:"",
    }

    handleChange=(event)=>{
        this.setState({nom:event.target.value});
    }

    handleSubmit=(event)=>{
        this.sendData();
        var conf=window.confirm("Categorie inserez avec sucess,Voir la liste ?");
            if(conf){
                window.location.href="/liste";
            }
    }

    sendData=()=>{
        const data=new URLSearchParams();
        data.append("nom",this.state.nom)

        const requestOption={
            method:'POST',
            body:data,
            headers:{"authorization": localStorage.getItem("token")}
        }


        console.log(this.state.nom);

        fetch(URLHelper.urlgen("categorie/save"),requestOption)
        .then(response => {
            console.log("Reponse :"+response.text);
        })
        .catch(error=> {
            

        });

    }
    
    render(){
        return(
            <div className="card" id="addCategorieCard">
                <div className=" card-body row mt-md-5">
                    <div className="col">
                        <div className="mb-3 hidden-md  text-center">
                            <img src={logo} width="30%" alt="logo"/>
                        </div>
                        <div  className=" mb-2">
                            <div>
                                <h3 className="text-center" id="addCategorieTitle">Add new Category</h3>
                                <br />
                            </div>
                            <div id="addCategorieForm" className="container  d-flex flex-column justify-content-center align-items-center">
                                <label id="input">
                                    <input type="text" placeholder=" " value={this.state.nom} onChange={this.handleChange} id="field" />  
                                    <span id="label">Nom</span>  
                                </label>
                                <hr />
                                <button className="btn" id="btnAdd" onClick={this.handleSubmit}>Ajouter</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default AddCategorie;