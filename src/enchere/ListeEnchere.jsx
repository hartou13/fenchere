// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { Component } from 'react'
// import { Enchere } from '../data/type'
import EnchereGoing from './EnchereGoing'
import {fetchOnGoing} from './data'
import NavFrontOffice from '../page/NavFrontOffice'

export default class ListeEnchere extends Component {
  state = {
    liste: [
    {
      maxmise: 600000.0,
      idUtilisateur: 1,
      miseur: 2,
      nomlot: "Ford Fiesta",
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
      listSary: [],
      id: 2
  }
],
  }
  async componentDidMount(){
    let retour = await fetchOnGoing();
    // console.log(retour);
    if (retour.info !== undefined) {
      alert(retour.info);
    } else {
      let data= retour.data;
      console.log(data);
      this.setState({ liste: data.liste });
    }
  }

  render() {
    console.log(this.state.liste);
    return (
      <div id="home-page" className="container">
        <NavFrontOffice></NavFrontOffice>
        <div>
          <div>
            <h1>Liste Enchere</h1>
          </div>
        </div>
        <div>
            {this.state.liste.map((e)=> <EnchereGoing enchere={e} devise={"Ar"}></EnchereGoing>)}
           
        </div>
      </div>
    )
  }
}
