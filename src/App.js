import React, { Component } from 'react';
import HeaderSection from './sections/HeaderSection';
import AboutSection from './sections/AboutSection';

class App extends Component {
    render() {
        return (
            <div>
                <HeaderSection/>
                <AboutSection/>
            </div>
        );
    }
}

export default App;
