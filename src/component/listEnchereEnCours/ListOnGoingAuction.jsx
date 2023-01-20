import React, { Component } from 'react';
import FetchHelper from '../..//Helper/FetchHelper';
import List from '../../gen/List';
// import ListStat from '../../gen/ListStat';
import URLHelper from '../../Helper/URLHelper';
import NavCategorie from '../../page/NavCategorie';
import { Loading } from '../Loading';

class ListOnGoingAuction extends Component {
    state = { 
        liste: [
			{
				lot: {
					refLot: "LO001",
					nomLot: "cageot vin",
					descriptionLot: "20 bouteilles",
					valeur: 200000.0,
					nombre: 1.0,
					utilisateurId: 1,
					id: 1
				},
				refEnchere: "EN001",
				debut: "Jan 10, 2023, 12:00:00 AM",
				duree: {
					years: 0,
					months: 0,
					days: 20,
					hours: 2,
					minutes: 3,
					wholeSeconds: 4,
					microSeconds: 0,
					type: "interval"
				}
            }
        ]
    } 
    constructor(){
        super();
    //    this.state = {inf:FetchHelper.getData(URLHelper.urlgen("api/Proformat_fournisseur_demande_ressource"))};
        this.listStat();
    }
    listStat=async ()=>{
        const val=await (FetchHelper.getData(URLHelper.urlgen("encheres/onGoing/")));
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
 
export default ListOnGoingAuction;