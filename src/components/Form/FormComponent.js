import React, { Component } from "react";




const FormHeader = () => {
    return (
        <>
        <h1 className="form__container-title">Any questions?</h1>
        <p className="form__container-text">Leave your email or call us!</p>
        </>
    );
};

const FormContact = () => (
    <div className="contact">
        <div className="contact-info">info@bestshop.xyz</div>
        <div className="contact-tel">123 456 789</div>
    </div>
)

const FormInputs=({id})=>{
    return (
        <>
            <label name={id}>{id}</label>
            <input name={id} id={id} type="text"/>
        </>
    )
}

const FormCheckout=({label,isSelected,onCheckboxChange})=>{
    return (
        <div>
            <input type="checkbox"
                    name={label}
                    checked={isSelected}
                    onChange={onCheckboxChange}
                    className="checkbox"/>
            <p>I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process under the European Parliament’s and Council of the European Union Regulation on the Protection of Natural Persons as of 27 April 2016, with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (Data Protection Directive)</p>
        </div>
    )
}

const OPTIONS = ["One"];

class FormForm extends Component{
    state = {
        checkboxes: OPTIONS.reduce(
            (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        )
    };
    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox])
            .forEach(checkbox => {
                console.log(checkbox, "is selected.");
            });
    };


    createCheckbox = option => (
        <FormCheckout
            label={option}
            isSelected={this.state.checkboxes[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );

    createCheckboxes = () => OPTIONS.map(this.createCheckbox);
    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <FormInputs id="name"/>
                <FormInputs id="email" />
                {this.createCheckboxes()}
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
    )
    }
    
}



const FormComponent = () => {
    return (
        <div className="form__container">
            <FormHeader/>
            <FormContact/>
            <FormForm/>
        </div>
        
    );
};

export default FormComponent;