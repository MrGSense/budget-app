import React, { Component } from 'react';

class BudgetForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            amount: 0,
            value: "income"
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="BudgetForm">
                <h1 className="BudgetForm__title">Add a new {this.state.value}</h1>
                <form className="BudgetForm__form" onSubmit={this.onSubmit}>
                    <select className="BudgetForm__select" name="value" id="value" onChange={this.onChange}>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    <div className="BudgetForm__name">
                        <label className="BudgetForm__name-label">Name: </label>
                        <input className="BudgetForm__name-input" type="text" name="name" id="name" onChange={this.onChange}></input>
                    </div>
                    <div className="BudgetForm__amount">
                        <label className="BudgetForm__amount-label">Amount: </label>
                        <input className="BudgetForm__amount-input" type="number" name="amount" id="amount" onChange={this.onChange}></input>
                    </div>
                    <button className="BudgetForm__button">Submit</button>
                </form>
            </div>
        )
    }
}

export default BudgetForm;