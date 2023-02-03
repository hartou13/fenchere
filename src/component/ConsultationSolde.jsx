import { Component } from "react";
import FetchHelper from "../Helper/FetchHelper";
import URLHelper from "../Helper/URLHelper";
import logo from "./default.png";
export default class ConsultationSold extends Component{

    state={
        sold:0
    }

    componentDidMount(){
        this.getSolde(this.props.utilisateur);
    }

    getSolde=async(utilisateur)=>{
        let url="solde/"+utilisateur;
        let headers={
            authorization:"smldfkdsmlfksdmlfksdmlfkdsmlfksmfks"
        };
        let retour=await FetchHelper.getData(URLHelper.urlgen(url));
        console.log(retour.data);
        this.setState({
          //manamboatra an ito rem za zao
            sold:retour.data.liste.solde
        });
      }

    render() {
        return (
            <div className="card shqdow-lg mb-3" style={{width:"18em"}} id="addCategorieCard">
            {/* <div className=" card-body row mt-md-5"> */}
                {/* <div className="col row"> */}
                    
                    {/* <div  className="col-md-6 mb-2"> */}
                        <div id="addCategorieForm" className="">
                            <p>Votre solde est : {this.state.sold} Ar</p>
                        </div>
                    {/* </div> */}
                {/* </div>     */}
            {/* </div> */}
    </div>
        );
    }
}