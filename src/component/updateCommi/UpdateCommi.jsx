import React, { Component } from 'react';
import NavCategorie from '../../page/NavCategorie';
import FetchHelper from '../../Helper/FetchHelper';
import URLHelper from '../../Helper/URLHelper';
class UpdateCommi extends Component {
    state = {  } 
    handleSubmit=async (event)=>{
        event.preventDefault();
        let form = document.getElementById("commi");
        let formData = new FormData(form);
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        console.log(object);
        let res=await FetchHelper.getDataPost(URLHelper.urlgen("historiqueCommission"), object);
        if("data" in res){
            window.location.replace("/stat");
        }
        else{
            alert(res.erreur)
        }
        
    }
    render() { 
        return (
            <React.Fragment>
                <NavCategorie/>
                <div className="card" id="addCategorieCard">
                <div className=" card-body row mt-md-5">
                    <div className="col">
                        <div  className=" mb-2">
                            <div>
                                <h3 className="text-center" id="addCategorieTitle">Nouvelle commission par defaut:</h3>
                                <br />
                            </div>
                            <form id="commi">
                            <div id="addCategorieForm" className="container  d-flex flex-column justify-content-center align-items-center">
                                <label id="input">
                                    <input type="number" id="field" placeholder=" " name="valeur"  step={0.001}  />  
                                    <span id="label">commission</span>  
                                </label>
                                <hr />
                                <button className="btn" id="btnAdd" onClick={this.handleSubmit}>Confimer</button>
                            </div>
                            </form>
                        </div>
                    </div>    
                </div>
            </div>
            </React.Fragment>
            

        );
    }
}
 
export default UpdateCommi;