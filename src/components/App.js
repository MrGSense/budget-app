import React, { Component } from 'react';
import BudgetApp from './BudgetApp/BudgetApp';
import './styles/app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BudgetApp />
            </div>
        )
    }
}

export default App;