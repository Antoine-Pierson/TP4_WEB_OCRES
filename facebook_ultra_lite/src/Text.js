import React from 'react';
import './Button.js'
import {LikeButton} from './Button';
import './Profil.css';

export class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: this.props.lastPublished,
            nbLikes: this.props.likes
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state.nbLikes)
        this.setState( () => ({nbLikes: this.props.nbLikes + 1}));
        
    }

    render() {
        return (
            <div> 
                <p> Commentaire: {this.props.txt} </p> 
                <LikeButton value="Like !" handleClick={this.handleClick}>Like</LikeButton>
                <button> {this.props.nbLikes} </button>
            </div>
        )
    }
}