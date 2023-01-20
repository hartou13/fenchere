import { Component } from "react";
import URLHelper from "../Helper/URLHelper";
import logo from './../assets/img/default.png';
class UpdateCategorie extends Component{

    state={
        categories:[],
        refCategorie:"",
        nomCategorie:""
    }

    getData=()=>{

        const requestOption={
            method:'GET',
            headers:{"authorization": localStorage.getItem("token")}
        }

        fetch(URLHelper.urlgen("categorie/getAll"),requestOption)
        .then(response => response.json())
        .then(data => {
            this.setState({
                categories:data.data,
                refCategorie:data.data[0].refCategorie
            });
        })
        .catch(error=> console.log(error))

    }
    
    componentWillMount(){
        this.getData();
    }

    handleChange=(event)=>{
        if (event.target.name==="nom") {
            this.setState({nomCategorie:event.target.value});
        }else if(event.target.name==="ref"){
            this.setState({refCategorie:event.target.value});
        }
    }

    handleSubmit=(event)=>{
        this.sendData();
        //window.location.href="http://localhost:3000/liste";
    }

    sendData=()=>{
        const data=new URLSearchParams();
        data.append("ref",this.state.refCategorie);
        data.append("nom",this.state.nomCategorie);

        const requestOption={
            method:'PUT',
            body:data, 
            authorization: localStorage.getItem("token")
        }


        console.log(requestOption);

        fetch(URLHelper.urlgen("categorie/update"),requestOption)
        .then(response => {        
            window.location.reload(false);
        })
        .catch(error=> window.location.replace("/"))

    }

    render(){
        return (
                <div className="card" id="addCategorieCard">
                <div className=" card-body row mt-md-5">
                    <div className="col">
                        <div className="mb-3 hidden-md  text-center">
                            <img src={logo} width="30%" alt="logo"/>
                        </div>
                        <div  className=" mb-2">
                            <div>
                                <h3 className="text-center" id="addCategorieTitle">Update a Category</h3>
                                <br />
                            </div>
                            <div id="addCategorieForm" className="container  d-flex flex-column justify-content-center align-items-center">
                                <label id="input">
                                    <span id="labelSelect">Categorie : </span>
                                    <select name="ref" onChange={this.handleChange} id="field">
                                    {
                                        this.state.categories.map(categorie=>{
                                            return (
                                                <option value={categorie.refCategorie}>{categorie.nomCategorie}</option>
                                            );
                                        })
                                    }
                                    </select>
                                </label>
                                <hr />
                                <label id="input">
                                    <input type="text" placeholder=" " value={this.state.nomCategorie} name="nom" onChange={this.handleChange} id="field" />  
                                    <span id="label">Nom</span>  
                                </label>
                                <hr />
                                <button className="btn" id="btnAdd" onClick={this.handleSubmit}>Update</button>
                            </div>
                        </div>
                    </div>    
                </div>
                
            </div>
        );
    }
}

export default UpdateCategorie;