import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            status: "",
            errors: {
                name: "",
                company: "",
                email: "",
                phone: "",
                comment: "",
            },
            input: {
                name: "",
                company: "",
                email: "",
                phone: "",
                comment: "",
            },
        };
    }

    submitForm(ev) {
        ev.preventDefault();
        if(this.validate()){
            let input = {};
            input["name"] = "";
            input["company"] = "";
            input["email"] = "";
            input["phone"] = "";
            input["comment"] = "";
            this.setState({input:input});
        }else {
            return false;
        }

        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
                setTimeout( () => this.setState({ status: "" }),4000);
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    handleChange(event) {
        this.setState({
            input: {...this.state.input, [event.target.name] : event.target.value},
            errors: {...this.state.errors, [event.target.name] : ""},
        });
    }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (!input["company"]) {
            isValid = false;
            errors["company"] = "Please enter your company name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {

            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter your phone number.";
        }

        if (typeof input["phone"] !== "undefined") {

            let pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input["phone"])) {
                isValid = false;
                errors["phone"] = "Please enter only number.";
            }else if(input["phone"].length < 10 || input["phone"].length > 18){
                isValid = false;
                errors["phone"] = "Please enter valid phone number.";
            }
        }

        if (!input["comment"]) {
            isValid = false;
            errors["comment"] = "Please enter your comment.";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/xzbpwkjk"
                method="POST"
            >
                <div className={`form-field ${this.state.errors.name ? "invalid" : ""}`}>
                    <input name="name" autoComplete="name" required={true} placeholder={this.props.lang.your_name} type="text"
                           value={this.state.input.name} onChange={this.handleChange}
                    />
                </div>
                <div className={`form-field ${this.state.errors.company ? "invalid" : ""}`}>
                    <input name="company" autoComplete="organization" required={true} placeholder={this.props.lang.company_name} type="text"
                           value={this.state.input.company} onChange={this.handleChange}
                    />
                </div>
                <div className={`form-field ${this.state.errors.email ? "invalid" : ""}`}>
                    <input name="email" required={true} placeholder={this.props.lang.work_email_address} type="email"
                           value={this.state.input.email} onChange={this.handleChange}
                    />
                </div>
                <div className={`form-field ${this.state.errors.phone ? "invalid" : ""}`}>
                    <input name="phone" autoComplete="tel" required={true} placeholder={this.props.lang.phone_number} type="tel"
                           value={this.state.input.phone} onChange={this.handleChange}
                    />
                </div>
                <div className={`form-textarea-field ${this.state.errors.comment ? "invalid" : ""}`}>
                    <textarea name="comment" placeholder={this.props.lang.message}
                           value={this.state.input.comment} onChange={this.handleChange}
                    />
                </div>
                <div className={"errors-block"}>
                    <p>{this.state.errors.name}</p>
                    <p>{this.state.errors.company}</p>
                    <p>{this.state.errors.email}</p>
                    <p>{this.state.errors.phone}</p>
                    <p>{this.state.errors.comment}</p>
                </div>
                <div className={"contact-action-block"}>
                    {status === "SUCCESS" ? <p className={"success"}>{this.props.lang.success_msg}</p> : <button>{this.props.lang.submit}</button>}
                    {status === "ERROR" && <p className={"error"}>{this.props.lang.error_msg}</p>}
                </div>
            </form>
        );
    }
}

export default Form;