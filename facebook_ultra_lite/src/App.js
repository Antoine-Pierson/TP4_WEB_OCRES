import React from 'react';
import './App.css';
import './Button.js'
import { Button } from './Button';
import './Profil.js';
import { Profil } from './Profil';

class App extends React.Component {
  constructor(props){
    super(props);
    const profils = [<Profil nom="Daniel" prenom="Jack"  birth="18/05/1895"/>, 
                    <Profil nom="Au Fraise" prenom="Charlotte" birth="27/12/2012"/>,
                    <Profil nom="Lestrange" prenom="Camille" birth="07/03/1984"/>];
    this.state = {
      currentProfil: profils[0],
      profilTab: profils
    };

    this.handleChange = this.handleChange.bind(this);
  }

  getProfil(name) {
    for (var i = 0; i < this.state.profilTab.length; i++) {
      if (this.state.profilTab[i].props.prenom === name){
        return this.state.profilTab[i];
      }
    }
  }

  handleChange (e) {
    console.log(e);
    this.setState({currentProfil: this.getProfil(e.props.name)});
  };

  render() {
    return (
      <div className="App">
        <h2> Facebook Ultra Lite </h2>
        
        <Button name={this.state.profilTab[0].props.prenom} handleChange={this.handleChange}/>
        <Button name={this.state.profilTab[1].props.prenom} handleChange={this.handleChange}/>
        <Button name={this.state.profilTab[2].props.prenom} handleChange={this.handleChange}/>
        
        <p>{this.state.currentProfil}</p>

      </div>
    );
  }
}

export default App;
