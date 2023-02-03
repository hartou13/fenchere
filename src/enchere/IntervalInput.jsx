import React,{Component} from "react";
import InputComp from "../component/InputComp";
export default  class IntervalInput extends  Component{
    state={
        years:0,
        months:0,
        days:0,
        hours:0,
        minutes:0,
        wholeSeconds:0,
        microSeconds:0
    }
    handleChange=()=>{
        this.setState({
            years:document.getElementById("years").value,
            months:document.getElementById("months").value,
            days:document.getElementById("days").value,
            hours:document.getElementById("hours").value,
            minutes:document.getElementById("minutes").value,
            wholeSeconds:document.getElementById("wholeSeconds").value,
            microSeconds:document.getElementById("microSeconds").value  ,


        });


    }
    render() {
        return(
            <table>
                <tr>
                    <td>Year</td>
                    <td>Month</td>
                    <td>Days</td>
                    <td>Hour</td>
                    <td>Minutes</td>
                    <td>WholeSeconds</td>
                    <td>MicroSeconds</td>
                    <td></td>
                </tr>
                <tr>
                    <td><InputComp id="years" /></td>
                    <td><InputComp id="months" /></td>
                    <td><InputComp id="days" /></td>
                    <td><InputComp id="hours" /></td>
                    <td><InputComp id="minutes" /></td>
                    <td><InputComp id="wholeSeconds" /></td>
                    <td><InputComp id="microSeconds" /></td>
                    <td><button onClick={this.handleChange} className={"btn btn-success"}>Validate</button></td>
                </tr>
            </table>
        )
    }
}