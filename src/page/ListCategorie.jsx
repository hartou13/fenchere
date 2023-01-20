import { Component } from "react";
import logo from './../assets/img/profile.png';
import './../assets/css/listCategorie.css';
import URLHelper from "../Helper/URLHelper";
import { Loading } from "../component/Loading";
import FetchHelper from "../Helper/FetchHelper";
class ListCategorie extends Component{

   

    state={
        categories:[]
    }

    getData=async ()=>{

        const requestOption={
            method:'GET',
            headers:{"authorization": localStorage.getItem("token")}
        }
        this.setState({loading:true});
        // fetch(URLHelper.urlgen("categorie/getAll"),requestOption)
        // .then(response => response.json())
        // .then(data => {
        //     this.setState({categories:data.data});
        // })
        // .catch(error=> console.log(error))
        const val=await (FetchHelper.getData(URLHelper.urlgen("categorie/getAll")));
        if("error" in val)
            window.location.replace("/")
        this.setState({categories:val.data});
        console.log(val.data);
    }
    
    constructor(){
        super();
    //    this.state = {inf:FetchHelper.getData(URLHelper.urlgen("api/Proformat_fournisseur_demande_ressource"))};
        this.getData();
    }


    render(){
        return(
            <div id="container" className="container position-relative">
                <div className="row m-auto mt-md-5 position-relative">
                    <div className="col-md-6" id="blur">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <img src={logo} width="90%" alt="logo"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-2">
                            <h1 className="fw-bolder text-center text-uppercase">Liste des categories</h1>
                        </div>
                        <br />
                        <br />
                        
                        <div className="d-flex flex-column flex-shrink-0">
                            {
                                FetchHelper.loading ? (
                                    <Loading/>
                                ) : (
                                    <div className="table-responsive">
                                <table id="table" className="table-sm table">
                                    <thead>
                                        <tr>
                                            <th>Ref</th>
                                            <th>Nom</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.categories.map(categorie=>{
                                                return (
                                                    <tr>
                                                            <td>{categorie.refCategorie}</td>
                                                            <td>{categorie.nomCategorie}</td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default ListCategorie;