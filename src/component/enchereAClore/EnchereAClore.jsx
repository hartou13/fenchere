import React,{Component} from "react";
import './../../assets/dist/css/bootstrap.min.css';
import URLHelper from "../../Helper/URLHelper";
import FetchHelper from "../../Helper/FetchHelper";
import TableComp from "../TableComp";
import BtnValidate from "../../demandeargent/BtnValidate";
import NavCategorie from "../../page/NavCategorie";
import BtnClore from "./BtnClore";
export default class EnchereAClore extends React.Component {
    state={
 
        datas:[]
    };
    async componentDidMount() {
        await this.loadData();
    }
    async loadData(){
        let url=URLHelper.urlgen("encheres/toEnd");
        let data=await FetchHelper.getData(url);
        if("error" in data)
            window.location.replace("/")
        // let a=JSON.parse(data);
        if(data.data!==undefined){
            this.prepare(data.data.liste);
            console.log(data.data);
            this.setState({datas:data.data.liste});

        }
    }
    prepare(data){
        for(let i=0;i<data.length;i++){
            data[i]["button"]=<BtnClore send={data[i]["id"]} href="any" className="btn btn-success" >Clore</BtnClore>;
        }
    }
    

    render() { 
        let header=["refEnchere","debut","maxmise","idUtilisateur","button"];
        console.log(this.state.datas);
        return(
            <React.Fragment>
                <NavCategorie/>
                <TableComp border="1" cellSpacing="0" className="table table-striped table-sm" data={this.state.datas} header={header}>
                </TableComp>
            </React.Fragment>
            
        )
    }
}