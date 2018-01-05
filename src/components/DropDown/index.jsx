import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './dropdown.css'

class DropDown extends Component {

    render() {
        let options = this.props.options.map(function (option) {
            return <option>{option}</option>
        });
        if (this.props.text !== "" && this.props.text !== null)
            options.unshift(<option selected disabled hidden>{this.props.text}</option>);
        if (this.props.isDisabled)
            return <select disabled className="select-style">{options}</select>;
        else
            return <select className="select-style">{options}</select>
    }
}

DropDown.propTypes = {
    text: PropTypes.string,
    isDisabled: PropTypes.bool,
    options: PropTypes.array,
};
DropDown.defaultProps = {
    text: "",
    isDisabled: false,
    options: [""],
};

export default DropDown