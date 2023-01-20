import React, { Component } from 'react';
import FetchHelper from '../..//Helper/FetchHelper';
import List from '../../gen/List';
import ListStat from '../../gen/ListStat';
import URLHelper from '../../Helper/URLHelper';
import NavCategorie from '../../page/NavCategorie';
class BackOffStat extends Component {
    state = { inf:{
        v_depense_moy:[{
            somme: 35000.0,
            refUtilisateur: "UT002",
            email: "test2@example.com",
            mdp: "test2",
            nom: "testUtilisateur2",
            prenom: "u2",
            dateDeNaissance: "Jan 17, 1994, 12:00:00 AM",
            id: 2
        }],
        v_participation_moy:[{
            nbParticipation: 3,
            refUtilisateur: "UT002",
            email: "test2@example.com",
            mdp: "test2",
            nom: "testUtilisateur2",
            prenom: "u2",
            dateDeNaissance: "Jan 17, 1994, 12:00:00 AM",
            id: 2
        }],
        v_lot_owner_nb:[{
            isa: 2,
            refUtilisateur: "UT001",
            email: "test@example.com",
            mdp: "test",
            nom: "testUtilisateur1",
            prenom: "u1",
            dateDeNaissance: "Jan 17, 1995, 12:00:00 AM",
            id: 1
        }],
        v_moy_commission:[{
            moyenne_commission: 1750.0
        }],
        full_v_trends:[{
            nbMise: 3,
            refCategorie: "CT001",
            nomCategorie: "vin",
            id: 1
        },],
        full_v_nb_miseur_par_enchere:[{
            isa: 2,
            refEnchere: "EN001",
            debut: "Jan 10, 2023, 8:00:00 AM",
            duree: {
                years: 0,
                months: 0,
                days: 20,
                hours: 2,
                minutes: 3,
                wholeSeconds: 4,
                microSeconds: 0,
                type: "interval"
            },
            prixDeMisEnEnchere: 20000.0,
            idLot: 1,
            Commission: 5.0,
            id: 1
        }], 
        full_v_nb_mise_par_enchere:[{
            refEnchere: "EN001",
            debut: "Jan 10, 2023, 8:00:00 AM",
            duree: {
                years: 0,
                months: 0,
                days: 20,
                hours: 2,
                minutes: 3,
                wholeSeconds: 4,
                microSeconds: 0,
                type: "interval"
            },
            prixDeMisEnEnchere: 20000.0,
            idLot: 1,
            Commission: 5.0,
            id: 1
        }], 
        v_enchere_en_cours_nb:[{
            isa: 1
        }], 
        v_today_enchere_nb:[{
            isa: 0
        }], 
        v_month_enchere_nb:[{
            isa: 2
        }]
        
    } } 
    constructor(){
        super();
    //    this.state = {inf:FetchHelper.getData(URLHelper.urlgen("api/Proformat_fournisseur_demande_ressource"))};
        this.listStat();
    }
    listStat=async ()=>{
        const val=await (FetchHelper.getData(URLHelper.urlgen("stat/")));
        if("error" in val)
            window.location.replace("/")
        this.setState({inf:val.data});
        console.log(val.data);
        // console.log("hereeee");
    }
    render() {
        var key=Object.keys(this.state.inf); 
        return (<React.Fragment>
            {/* {key.map(element=> */}
                {/* <List tab={this.state.inf[element]}></Li    st> */}
                <NavCategorie/>
                <h2>Depense moyenne des utilisateurs</h2>
                <ListStat tab={this.state.inf.v_depense_moy}></ListStat> 
                <h2>Participation moyenne des utilisateurs dans les encheres</h2>
                <ListStat tab={this.state.inf.v_participation_moy}></ListStat>
                <h2>Participation moyenne des utilisateurs en tant que vendeurs</h2>
                <ListStat tab={this.state.inf.v_lot_owner_nb}></ListStat>
                <h2>Tendance des catégories</h2>
                <ListStat tab={this.state.inf.full_v_trends}></ListStat>
                <h2>Nombre de participant par enchere</h2>
                <ListStat tab={this.state.inf.full_v_nb_miseur_par_enchere}></ListStat>
                <h2>Mise par enchere</h2>
                <ListStat tab={this.state.inf.full_v_nb_mise_par_enchere}></ListStat>
                <h2>Nombre d'enchere en cours</h2>
                <List tab={this.state.inf.v_enchere_en_cours_nb}></List>
                <h2>Nombre d'enchere prévu pour aujourd'hui</h2>
                <List tab={this.state.inf.v_today_enchere_nb}></List>
                <h2>Nombre d'enchere prévu pour ce mois-ci</h2>
                <List tab={this.state.inf.v_month_enchere_nb}></List>
                <h2>Commission moyenne perçue</h2>
                <List tab={this.state.inf.v_moy_commission}></List>
        </React.Fragment>);
    }
}
 
export default BackOffStat;