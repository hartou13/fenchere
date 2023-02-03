import React, { Component } from 'react'
import './onGoing.css'
import IntervalBadge from './IntervalBadge'
export default class EnchereGoing extends Component {
    handleClick = (idEnchere) =>{
        window.location.replace("/mise?ind="+idEnchere);
    }
render() {
return (
<div className="enchere-item mb-3">
    <div className="ion-text-wrap">
        
        <button onClick={()=>this.handleClick(this.props.enchere.id)} className="btn btn-light  text w-100 position-relative">
            <h2>Ref: {this.props.enchere.refEnchere}</h2>
            <span className="date">
                <IntervalBadge interval={this.props.enchere.duree} color="warning"></IntervalBadge>
            </span>
            <h3 className="text-center">
        Mise Max: <span className="badge bg-success">{this.props.enchere.prixDeMisEnEnchere} {this.props.devise}</span>
        </h3>
        </button>
        <div className='row'>
            <div className='col col-lg-12 col-md-12 col-sm-12'>
                    <h3 className='text-center'>Lot: {this.props.enchere.nomlot}</h3>
            </div>
            <div className='col col-lg-12 col-md-12 col-sm-12'>
                    {
                        this.props.enchere.listSary.map(i=> <img className=' shadow-lg img-fluid img-responsive' src={i.sary} />)
                    }
            </div>
        </div>
    </div>
    
</div>
)
}
}