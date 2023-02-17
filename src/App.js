import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />

                <Footer />
            </div>
        </Router>
    );
};

export default App;
