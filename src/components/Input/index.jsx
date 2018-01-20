import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './input.css'


class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue,
            isValid: false
        };

        this._handleChange = this._handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    _handleChange(event) {
        let textValue = event.target.value;

        this.setState({
            value: textValue,
            isValid: this.validate(textValue)
        });
    }

    validate(textValue) {
        if (this.props.isValid) {
            return this.props.isValid(textValue)
        }
    }

    render() {
        let inputClass = 'input ';
        if (this.props.isValid) { //if validator is passed
            if (this.state.isValid) {
                inputClass += 'valid'
            } else {
                inputClass += 'invalid'
            }
        }

        let placeholder = this.props.placeholder;
        if (this.props.defaultValue) {
            placeholder = undefined;
        } else if (!this.props.defaultValue && !this.props.placeholder) {
            placeholder = 'Input...';
        }

        return (
            <input type="text" style={{width: this.props.width, height: this.props.height}} className={inputClass}
                   value={this.state.value} onChange={this._handleChange} disabled={this.props.disabled}
                   placeholder={placeholder}/>);
    }
}

Input.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    defaultValue: PropTypes.string,
    isValid: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string
};

Input.defaultProps = {
    width: 150,
    height: 15,
    defaultValue: undefined,
    isValid: undefined,
    disabled: false,
    placeholder: undefined
};

export default Input;
