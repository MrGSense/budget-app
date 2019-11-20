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
                    <select className="BudgetForm__form-select" name="value" id="value" onChange={this.onChange}>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    <div className="BudgetForm__form-div">
                        <label className="BudgetForm__form-label">Name: </label>
                        <input className="BudgetForm__form-input" type="text" name="name" id="name" onChange={this.onChange} placeholder="Name"></input>
                    </div>
                    <div className="BudgetForm__form-div">
                        <label className="BudgetForm__form-label">Amount: </label>
                        <input className="BudgetForm__form-input" type="number" name="amount" id="amount" onChange={this.onChange} placeholder="Amount"></input>
                    </div>
                    <button className="BudgetForm__form-button" onSubmit={this.state.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default BudgetForm;