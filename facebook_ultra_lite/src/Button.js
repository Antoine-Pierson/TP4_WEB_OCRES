import React from 'react';
import './Profil.js';
import { Profil } from './Profil';

export class Button extends React.Component {
    render() {
        
        return (
            <input 
                type="button"  
                value={this.props.name} 
                onClick={ () => this.props.handleChange(this)}
            />
        )
    }
}