import React,{Component} from 'react';
import URLHelper from "../../Helper/URLHelper";
import FetchHelper from "../../Helper/FetchHelper";

export default class BtnClore extends React.Component{
    state={
        send:""
    }
    constructor(props){
        super(props);
        this.state.send=props.send;
    }
    validate=()=>{
        let id=this.state.send;
        console.log(id);
        
    }
    handleSubmit=async (event)=>{
        console.log("clicked");
        let id=this.state.send;
        event.preventDefault();
        let response=await FetchHelper.getDataPost(URLHelper.urlgen("encheres/clore/"+id,{}));
        console.log(response);
        if("error" in response){
            this.setState({ erreur: response.error.message})
        }
        else{
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("idAdmin", response.data.idadmin);
            window.location.replace("/stat");
        }

    }
    render(){
        return(
            <button onClick={this.handleSubmit}  className={this.props.className}>
                {this.props.children}
            </button>
        )
    }
}