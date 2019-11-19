import React, { Component } from 'react';

class BudgetItem extends Component{
    render() {
        return (
            <div className="BudgetItem">
                <p className="BudgetItem__text">{this.props.name}: ${this.props.amount}</p>
            </div>
        )
    }
}

export default BudgetItem;