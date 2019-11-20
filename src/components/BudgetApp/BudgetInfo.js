import React, { Component } from 'react';

class BudgetInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incomeTotal: 0,
            expenseTotal: 0
        }
        this.calculateTotals = this.calculateTotals.bind(this);
    }

    calculateTotals(data) {
        let newTotal = 0;
        for (let i = 0; i < data.length; i++) {
            newTotal += data[i].amount
        }
        
        return newTotal;
    }

    componentDidUpdate(prevProps, prevState) {
        const newExpenseTotal = this.calculateTotals(this.props.expenses);
        const newIncomeTotal = this.calculateTotals(this.props.incomes) - newExpenseTotal;
            
        if(newIncomeTotal !== prevState.incomeTotal || newExpenseTotal !== prevState.expenseTotal) {
            this.setState({incomeTotal: newIncomeTotal, expenseTotal: newExpenseTotal});
        }
    }

    render() {
        return (
            <div className="BudgetInfo">
                <h2 className="BudgetInfo__income">Income: ${this.state.incomeTotal}</h2>
                <h2 className="BudgetInfo__expense">Expense: ${this.state.expenseTotal}</h2>
            </div>
        )
    }
}

export default BudgetInfo;