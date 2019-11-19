import React, { Component } from 'react';
import BudgetItem from './BudgetItem';

class BudgetList extends Component{
    render() {
        return (
            <div className="BudgetList">
                <h1>{this.props.type}s</h1>
                <div className="BudgetList__list">
                    {this.props.data.map(data => 
                        <BudgetItem key={data.id} name={data.name} amount={data.amount} />
                    )}
                </div>
            </div>
        )
    }
}

export default BudgetList;