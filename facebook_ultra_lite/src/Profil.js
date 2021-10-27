import React from 'react';

export class Profil extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nom: null,
        prenom: null,
        birth: null,
      }
    }
  
    render() {
      return(
        <div>
        <p>Nom: {this.props.nom}</p>   <p>Prenom: {this.props.prenom}</p>
        <p>Date de naissance: {this.props.birth}</p>
      </div>
      )
    }
  }