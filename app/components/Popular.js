import React, { Component } from 'react';

export default class Popular extends Component {

    state = { selectedLanguage: 'All' }

    render() {
        const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'R']
        return (
            <ul className='flex-center'>
                {languages.map((language) => (
                    <li key={language}>
                        <button className='btn-clear nav-link'>
                            {language }
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}