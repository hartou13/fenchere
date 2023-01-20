import React, { Component } from 'react';
import FetchHelper from '../../Helper/FetchHelper';
import URLHelper from '../../Helper/URLHelper';
import List from '../../gen/List';
import NavCategorie from '../../page/NavCategorie';
import { Loading } from '../Loading';

class ListUsers extends Component {

    
    state = { 
        liste: [
			{
				refUtilisateur  : "UT001",
				email: "test@example.com",
				mdp: "test",
				nom: "testUtilisateur1",
				prenom: "u1",
				dateDeNaissance: "Jan 17, 1995, 12:00:00 AM",
				id: 1
			}
        ]
    } 
    constructor(){
        super();
    //    this.state = {inf:FetchHelper.getData(URLHelper.urlgen("api/Proformat_fournisseur_demande_ressource"))};
        this.listStat();
    }
    listStat=async ()=>{
        const val=await (FetchHelper.getData(URLHelper.urlgen("users/")));
        this.setState({liste:val.data.liste});
        if("error" in val)
            window.location.replace("/")
        console.log(val.data);
        // console.log("hereeee");
    }
    render() { 
        return (
            <React.Fragment>
                <NavCategorie/>
                { FetchHelper.loading ? (
                    <Loading></Loading>
                ) 
                :(
                    <div>
                        <List tab={this.state.liste}></List>
                    </div>
                )} 
            </React.Fragment>
        );
    }
}
 
export default ListUsers;