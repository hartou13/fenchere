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
        const val=await (FetchHelper.getData(URLHelper.urlgen("encheres/onGoing/")));
        this.setState({liste:val.data.liste});
        if("error" in val)
            window.location.replace("/")
        console.log(val.data);
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
    render() { 
        return (
            <React.Fragment>
                <NavCategorie/>
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
                                                <th>commission</th>
                                                <th>Mise max</th>
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
                                                <td>{el.idLot}</td>
                                                <td>{el.Commission}</td>
                                                <td>{el.maxmise}</td>
                                                {this.renderSary(el.listSary)}
                                            </tr>)}
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
}
 
export default ListOnGoingAuction;