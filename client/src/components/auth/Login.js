import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(user);
    }

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your DevConnector account</p>
                            <form onSubmit={ this.onSubmit }>
                                <div className="form-group">
                                    <input value={ this.state.email } onChange={ this.onChange } type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />
                                </div>
                                <div className="form-group">
                                    <input value={ this.state.password } onChange={ this.onChange } type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
                                </div>
                                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Login.propTypes = {};

export default Login;
