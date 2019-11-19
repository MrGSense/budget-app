import React, { Component } from 'react';

class BudgetForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            amount: Number,
            value: "income"
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        let newData = {
            name: this.state.name,
            amount: this.state.amount,
            type: this.state.value
        }
        
        this.props.sendData(newData);

        document.querySelector('#name').value = '';
        document.querySelector('#amount').value = '';
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
                        <label className="BudgetForm__label">Name: </label>
                        <input className="BudgetForm__input" type="text" name="name" id="name" onChange={this.onChange} placeholder="Name"></input>
                    </div>
                    <div className="BudgetForm__amount">
                        <label className="BudgetForm__label">Amount: </label>
                        <input className="BudgetForm__input" type="number" name="amount" id="amount" onChange={this.onChange} placeholder="Amount"></input>
                    </div>
                    <button className="BudgetForm__button" onSubmit={this.state.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default BudgetForm;