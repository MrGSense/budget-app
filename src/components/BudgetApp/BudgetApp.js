import React, { Component } from 'react';
import BudgetForm from './BudgetForm'

class BudgetApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            incomes: [],
            expenses: [],
            totals: {
                incomeTotal: 0,
                expensesTotel: 0
            }
        }
    }

    // calculateTotals(array){
    //     let arrayTotal = 0;
    //     for(let i = 0; i < array.length; i++){
    //         array[i] += arrayTotal;
    //     }
    //     return arrayTotal
    // }

    // componentDidUpdate(){
    //     newIncomeTotal = this.calculateTotals(this.state.incomes);
    //     newExpenseTotal = this.calculateTotals(this.state.expenses);
    //     this.setState({incomeTotal: newIncomeTotal, expensesTotal: newExpenseTotal})
    // }

    render() {
        return (
            <div className="BudgetApp">
                <BudgetForm />
            </div>
        )
    }
}

export default BudgetApp;