import React from 'react';
import './Button.js'
import { Button } from './Button';
import './Profil.css';

const colors = ['#ff6a6a', '#79cdcd', '#29ab87', '#c8a2c8', '#f8b878']

export class Profil extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nom: null,
        prenom: null,
        birth: null,
        bgdColor: '#c8a2c8'
      }
      this.handleChangeStyle = this.handleChangeStyle.bind(this);
    }

    getRandomColor() {
      const diffColors = colors.filter(color => color !== this.state.bgdColor);
      const randomColorIndex = Math.floor(Math.random() * diffColors.length);
      return diffColors[randomColorIndex];
    }

    handleChangeStyle (e) {
      console.log(e);
      this.setState(({bgdColor}) => ({bgdColor: this.getRandomColor()}))
    };
  
    render() {
      return(
        <div className="profil" style={{ backgroundColor: this.state.bgdColor }}>
        <p>Nom: {this.props.nom}</p>   
        <p>Prenom: {this.props.prenom}</p>
        <p>Date de naissance: {this.props.birth}</p>

        <Button name={"Change Style"} handleChange={this.handleChangeStyle}/>
      </div>
      )
    }
  }