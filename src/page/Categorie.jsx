import { Component } from "react";
import "./../assets/css/nav.css";
import logo from './../assets/img/profile.png';
import AddCategorie from "./AddCategorie";
import ListCategorie from "./ListCategorie";
import UpdateCategorie from "./UpdateCategorie";
import BackOffStat from "../component/BackOffStat/BackOffStat";
import ListUsers from "../component/listUsers/ListUsers";
import HistoriqueMouvement from "../component/historiqueMouvement/HistoriqueMouvement";
import ListOnGoingAuction from "../component/listEnchereEnCours/ListOnGoingAuction";
import UpdateAdmin from "../component/updateAdmin/UpdateAdmin";
import NotValidate from "../demandeargent/NotValidate";
import NavCategorie from "./NavCategorie";
class Categorie extends Component{
    state={
        component:this.props.component,
        page:1
    }
   
    afficherList=()=>{
        this.setState({
            component:<ListCategorie/>,
            page:1
        });
    }

    afficherAdd=()=>{
        this.setState({
            component:<AddCategorie/>,
            page:1
        });
    }

    afficherUpdate=()=>{
        this.setState({
            component:<UpdateCategorie/>,
            page:1
        });
    }
    afficherStat=()=>{
        this.setState({
            component:<BackOffStat/>,
            page:1
        });
    }
    ListUser=()=>{
        this.setState({
            component:<ListUsers/>,
            page:1
        });
    }
    histo=()=>{
        this.setState({
            component:<HistoriqueMouvement/>,
            page:1
        });
    }
    affichOngoing=()=>{
        this.setState({
            component:<ListOnGoingAuction/>,
            page:1
        });
    }
    updateAdmin=()=>{
        this.setState({
            component:<UpdateAdmin/>,
            page:1
        });
    }
    toValidate=()=>{
        this.setState({
            component:<NotValidate/>,
            page:1
        });
    }
    render(){
        return(
            <div>
                <NavCategorie></NavCategorie>
                {this.state.component}
            </div>
        );
    }
}

export default Categorie;