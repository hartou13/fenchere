import React,{Component} from "react";
import './../assets/dist/css/bootstrap.min.css';
import URLHelper from "../Helper/URLHelper";
import FetchHelper from "../Helper/FetchHelper";
import TableComp from "./../component/TableComp";
import BtnValidate from "./BtnValidate";
import NavCategorie from "../page/NavCategorie";
export default class NotValidate extends React.Component {
    state={
 
        datas:[]
    };
    async componentDidMount() {
        await this.loadData();
    }
    async loadData(){
        let url=URLHelper.urlgen("dm/notvalidate");
        let data=await FetchHelper.getData(url);
        if("error" in data)
            window.location.replace("/")
        // let a=JSON.parse(data);
        if(data.data!==undefined){
            this.prepare(data.data);
            console.log(data.data);
            this.setState({datas:data.data});

        }
    }
    prepare(data){
        for(let i=0;i<data.length;i++){
            data[i]["button"]=<BtnValidate send={data[i]["id"]} href="any" className="btn btn-success" >Valider</BtnValidate>;
        }
    }
    

    render() { 
        let header=["refdemande","somme","nom","prenom","button"];
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