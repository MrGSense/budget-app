import React, { Component } from 'react';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';
import BudgetInfo from './BudgetInfo';

const uuid = require('uuid')

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
            amount: parsedAmt,
            id: uuid()
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
                <BudgetInfo incomes={this.state.incomes} expenses={this.state.expenses} />
                <BudgetForm sendData={this.getData} />
                <div className="BudgetApp__lists">
                    <BudgetList data={this.state.incomes} type="Income" />
                    <BudgetList data={this.state.expenses} type="Expense" />
                </div>
            </div>
        )
    }
}

export default BudgetApp;