import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './button.css';

class Button extends Component {
    getButtonClass() {
        let className = "btn ";
        if (this.props.isDisabled && this.props.isFlat) {
            className += "flat disabled"
        } else if (this.props.isDisabled) {
            className += "disabled"
        } else {
            if (this.props.isFlat)
                className += "flat ";
            if (this.props.type === "submit" || this.props.type === "cancel")
                className += this.props.type;
        }
        return className;
    }

    render() {
        let className = this.getButtonClass();
        let onClick = this.props.isDisabled ? "" : this.props.onClick;
        return <button className={className} onClick={onClick}><span>{this.props.children}</span></button>;
    }
}

Button.propTypes = {
    children: PropTypes.element.isRequired,
    type: PropTypes.string,
    isFlat: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
};
Button.defaultProps = {
    type: "submit",
    isFlat: false,
    isDisabled: false,
    children: <span style={{margin: 0, padding: 0}}>Button</span>,
};
export default Button;
