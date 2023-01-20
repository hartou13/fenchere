import React, { Component } from 'react';
import FetchHelper from '../..//Helper/FetchHelper';
import List from '../../gen/List';
// import ListStat from '../../gen/ListStat';
import URLHelper from '../../Helper/URLHelper';
import NavCategorie from '../../page/NavCategorie';
import { Loading } from '../Loading';

class HistoriqueMouvement extends Component {
    state = { 
        liste:[
            {
				refMouvement: "MV004",
				motif: "init client",
				idMotif: 4,
				daty: "Jan 15, 2023, 12:00:00 AM",
				somme: 300000.0,
				idUtilisateur: 3,
				id: 4
			}
        ]
    }
    constructor(){
        super();
    //    this.state = {inf:FetchHelper.getData(URLHelper.urlgen("api/Proformat_fournisseur_demande_ressource"))};
        this.listHisto();
    }
    listHisto=async ()=>{
        const val=await (FetchHelper.getData(URLHelper.urlgen("vola")));
        if("error" in val)
            window.location.replace("/")
        this.setState({liste:val.data.liste});
        console.log(val.data);
        // console.log("hereeee");
    }
    render() { 
        // console.log(this.state.liste);
        return (
            <React.Fragment>
                <NavCategorie/>
                {
                    FetchHelper.loading ?(
                        <Loading/>
                    ):(
                        <List tab={this.state.liste}></List>
                    )
                }
            </React.Fragment>
        );
    }
}

export default HistoriqueMouvement;