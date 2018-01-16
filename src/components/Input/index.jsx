import React, {Component} from 'react';
import PropTypes from 'prop-types';

import "./index.css"


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue,
            isValid: this.props.validator(this.props.defaultValue),
        };

        this._onChange = this._onChange.bind(this);
    }

    _onChange(event) {
        let isValid = this.props.validator(event.target.value);
        this.setState({value: event.target.value, isValid: isValid});
    }

    render() {
        let className = "input";
        if (!this.state.isValid)
            className += " invalid";
        return (<input
            className={className}
            style={{width: this.props.width, height: this.props.height}}
            disabled={this.props.isDisabled}
            type="text"
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this._onChange}/>)
    }
}

Input.propTypes = {
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    validator: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
    isDisabled: PropTypes.bool,
};

Input.defaultProps = {
    isDisabled: false,
    placeholder: "input",
    defaultValue: "",
    width: "",
    height: "",
};


export default Input;