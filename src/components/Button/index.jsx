import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './button.css'

class Button extends Component {

    getClassName() {
        let className = 'btn ';
        if (this.props.type) {
            className += this.props.type + ' ';
        }
        if (!this.props.isActive) {
            className += 'deactivated ';
        }
        if (this.props.isFlat) {
            className += 'flat ';
        }

        return className;
    }


    render() {
        return (
            <button className={this.getClassName()} onClick={this.props.onClick}
                    disabled={!this.props.isActive}>{this.props.children}</button>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string,
    isActive: PropTypes.bool,
    isFlat: PropTypes.bool
};

Button.defaultProps = {
    type: undefined,
    isActive: true,
    isFlat: false
};

export default Button;
