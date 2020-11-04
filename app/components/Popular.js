import React, { Component } from 'react';

export default class Popular extends Component {

    state = { selectedLanguage: 'All' };
    updateLanguage(selectedLanguage, e) {
        e.preventDefault();
        this.setState({
            selectedLanguage: selectedLanguage
        })
    };

    render() {
        const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'R']
        return (
            <ul className='flex-center'>
                {languages.map((language) => (
                    <li key={language}>
                        <button 
                            className='btn-clear nav-link'
                            onClick={(e) => this.updateLanguage(language, e)}>
                            {this.state.selectedLanguage}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}