import React, { Component } from 'react';
import './../../assets/bootstrap/css/bootstrap.min.css';
import './../../assets/css/Login-Form-Clean.css';
import './../../assets/css/styles.css';
import List from '../../gen/List';
import URLHelper from '../../Helper/URLHelper';
import FetchHelper from '../../Helper/FetchHelper';
import NavFrontOffice from '../../page/NavFrontOffice';
// import './../../assets/bootstrap/js/bootstrap.min.js';
class AdvSearch extends Component {
    state = { 
        liste:[
            {
                refCategorie: "CT001",
                nomCategorie: "vin",
                id: 1
            }
        ],
        status:[
            {
                name:"did not begin", 
                code: 0
            },
            {
                name:"going on", 
                code: 1
            },
            {
                name:"to be finished", 
                code: 2
            },
            {
                name:"finished",  
                code: 3
            }
        ],
        listeRes:
        [
            {
                maxmise: 600000.0,
                idUtilisateur: 2,
                refEnchere: "EN002",
                debut: "Jan 10, 2023, 12:00:00 AM",
                duree: {
                    years: 0,
                    months: 0,
                    days: 90,
                    hours: 0,
                    minutes: 0,
                    wholeSeconds: 0,
                    microSeconds: 0,
                    type: "interval"
                },
                prixDeMisEnEnchere: 500000.0,
                idLot: 2,
                Commission: 5.0,
                nomlot: "cageot vin",
                listSary: [{idLot:1, sary:"test"}],
                id: 2
            }
        
        ]
     } 
    constructor(){
        super();
    //    this.state = {inf:FetchHelper.getData(URLHelper.urlgen("api/Proformat_fournisseur_demande_ressource"))};
        this.listStat();
    }
    listStat=async ()=>{
        const val=await (FetchHelper.getData(URLHelper.urlgen("categorie/getAll/")));
        this.setState({liste:val.data});
        if("error" in val)
            alert(val);
        console.log(val.data);
        // console.log("hereeee");
    }
    handleSubmit=async (event)=>{
        event.preventDefault();
        let form = document.getElementById("formSearch");
        let formData = new FormData(form);
        let object = {};
        formData.forEach((value, key) =>{ 
            if(value!==""){
                if(object[key] === undefined){
                    object[key] = [];
                    // object[key].push(value);
                }
                object[key].push(value);
            }
        });
        console.log(object);
        // console.log(JSON.stringify(object));
        let response=await FetchHelper.getDataPost(URLHelper.urlgen("encheres/search"), object);
        console.log(response);
        if("error" in response){
            console.log(({ erreur: response.error.message}))
        }
        else{
            // localStorage.setItem("token", response.data.token);
            // localStorage.setItem("idAdmin", response.data.idadmin);
            this.setState({listeRes:response.data})
        }

    }
    formatDuree=(duree)=>{
        let res="";
        if(duree.days>0){
            res+=duree.days+" days ";
        }
        if(duree.months>0){
            res+=duree.months+" months ";
        }
        if(duree.years>0){
            res+=duree.years+" years ";
        }
        if(duree.hours>0){
            res+=duree.hours+" hours ";
        }
        if(duree.minutes>0){
            res+=duree.minutes+" minutes ";
        }
        if(duree.wholeSeconds>0){
            res+=duree.wholeSeconds+" seconds ";
        }
        return res
    }
    renderSary=(sary)=>{
        console.log("sary "+sary.length);
        if(sary.length>0){
            return <td><img src={sary[0].sary} alt="" width={"100%"} /></td>
        }
        else{
            return <td></td>
        }
    }
    render() { if(localStorage.getItem("idUser")==null)
    window.location.replace("/redirect");
        return (
            <React.Fragment>
                <NavFrontOffice></NavFrontOffice>
                <section className="login-clean">
                    <form method="post" id="formSearch">
                        <h2 >recherche</h2>
                        <div className="mb-3">
                            <label className="form-label">mot clé</label>
                            <input className="form-control" type="text" placeholder="que cherchez-vous ?" name="word"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">date</label>
                            <input className="form-control" type="date" name="datemin"/>
                            <input className="form-control" type="date" name="datemax" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">prix</label>
                            <input className="form-control" type="number" placeholder="min" name="prixmin"/>
                            <input className="form-control" type="number" placeholder="max" name="prixmax"/>
                        </div>
                        <div className="mb-3"></div>
                        <div className="mb-3"><label className="form-label">catégorie</label>
                        {this.state.liste.map(el => 
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="formCheck-1" name="cat" value={el.id}/>
                                <label className="form-check-label" for="formCheck-1">{el.nomCategorie}</label>
                            </div>
                        )}
                        
                        </div>
                        <div className="mb-3">
                            <label className="form-label">statut</label>
                            {this.state.status.map(el =>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="formCheck-3" name="status" value={el.code}/>
                                <label className="form-check-label" for="formCheck-3">{el.name}</label>
                            </div>)}
                            
                        </div>
                        <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit" onClick={this.handleSubmit}>Chercher</button></div>
                    </form>
                </section>
               
                <div className="col-md-6" style={{marginLeft: "30%", width: "100%"}}>             
                            <div className="d-flex flex-column flex-shrink-0">
                                <div className="table-responsive">
                                    <table id="table" className="table-sm table">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>refEnchere</th>
                                                <th>debut</th>
                                                <th>duree</th>
                                                <th>initial</th>
                                                <th>nom lot</th>
                                                <th>commission</th>
                                                <th>image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.listeRes.map(el=>
                                            <tr>
                                                <td>{el.id}</td>
                                                <td>{el.refEnchere}</td>
                                                <td>{el.debut}</td>
                                                <td>{this.formatDuree(el.duree)}</td>
                                                <td>{el.prixDeMisEnEnchere}</td>
                                                <td>{el.nomlot}</td>
                                                <td>{el.Commission}</td>
                                                {this.renderSary(el.listSary)}
                                            </tr>)}
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
            </React.Fragment>
        );
    }
}
 
export default AdvSearch;