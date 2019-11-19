import React, { Component } from 'react';
import BudgetForm from './BudgetForm';

class BudgetApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            incomes: [],
            expenses: []
        }
        this.getData = this.getData.bind(this);
        this.addData = this.addData.bind(this);
    }

    addData(data){
        const parsedAmt = parseFloat(data.amount)
        const newData = {
            name: data.name,
            amount: parsedAmt
        }

        if (data.type === "income") {
            const currentIncomes = this.state.incomes;
            currentIncomes.push(newData);
            this.setState({incomes: currentIncomes});
        } else {
            const currentExpenses = this.state.expenses;
            currentExpenses.push(newData);
            this.setState({expenses: currentExpenses});
        }
    }

    getData(data) {
        this.addData(data);
    }

    render() {
        return (
            <div className="BudgetApp">
                <BudgetForm sendData={this.getData} />
            </div>
        )
    }
}

export default BudgetApp;