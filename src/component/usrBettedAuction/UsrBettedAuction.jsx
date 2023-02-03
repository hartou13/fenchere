import React, { Component } from 'react';
import List from '../../gen/List';
import FetchHelper from '../../Helper/FetchHelper';
import URLHelper from '../../Helper/URLHelper';
import { Loading } from '../Loading';
import NavFrontOffice from '../../page/NavFrontOffice';
class UsrBettedAuction extends Component {
    state = { liste:[
        {
            idUtilisateur: 2,
            status: "to be finished",
            nomlot: "Subaru imprezza",
            maxmise: 600000.0,
            somme: 600000.0,
            refEnchere: "EN003",
            debut: "Jan 10, 2023, 12:00:00 AM",
            duree: {
                years: 0,
                months: 0,
                days: 2,
                hours: 0,
                minutes: 0,
                wholeSeconds: 0,
                microSeconds: 0,
                type: "interval"
            },
            prixDeMisEnEnchere: 500000.0,
            idLot: 3,
            Commission: 5.0,
            listSary: [],
            id: 3
        }
    ] } 
    constructor(){
        super();
    //    this.state = {inf:FetchHelper.getData(URLHelper.urlgen("api/Proformat_fournisseur_demande_ressource"))};
        this.listStat();
    }
    listStat=async ()=>{
        const val=await (FetchHelper.getData(URLHelper.urlgen("encheres/bettedAuction/"+localStorage.getItem("idUser"))));
        console.log(val);
        this.setState({liste:val.data.liste});
        if("error" in val)
            window.location.replace("/")
        // console.log("hereeee");
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
            <div>
                <NavFrontOffice></NavFrontOffice>
                {
                    FetchHelper.loading ?(
                        <Loading/>
                    ):(
                        <div className="col-md-6">             
                            <div className="d-flex flex-column flex-shrink-0">
                                <div className="table-responsive">
                                    <table id="table" className="table-sm table">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>refEnchere</th>
                                                <th>debut</th>
                                                <th>duree</th>
                                                <th>prix de mise en enchere</th>
                                                <th>lot</th>
                                                {/* <th>commission</th> */}
                                                <th>Mise max</th>
                                                <th>ma mise</th>
                                                <th>statut</th>
                                                <th>image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.liste.map(el=>
                                            <tr>
                                                <td>{el.id}</td>
                                                <td>{el.refEnchere}</td>
                                                <td>{el.debut}</td>
                                                <td>{this.formatDuree(el.duree)}</td>
                                                <td>{el.prixDeMisEnEnchere}</td>
                                                <td>{el.nomlot}</td>
                                                {/* <td>{el.Commission}</td> */}
                                                <td>{el.maxmise}</td>
                                                <td>{el.somme}</td>
                                                <td>{el.status}</td>
                                                {this.renderSary(el.listSary)}
                                            </tr>)}
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}
 
export default UsrBettedAuction;