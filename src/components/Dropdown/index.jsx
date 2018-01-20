import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select, {Option} from 'rc-select';

import "rc-select/assets/index.css"
import './dropdown.css'

class DropDown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.multiSelect ? undefined : this.props.placeholder
        };
    }

    onChange(val) {
        let value;
        if (val && val.target) {
            value = val.target.value
        } else {
            value = val
        }
        this.setState({
            value
        });
        this.props.onChange(value)
    }

    render() {
        return (
            <Select
                value={this.state.value}
                onChange={(val) => this.onChange(val)}
                style={{minWidth: 200}}
                disabled={this.props.isDisabled}
                multiple={this.props.multiSelect}
                allowClear={this.props.multiSelect}>
                {this.props.options.map((option) => {
                    return <Option key={option}>{option}</Option>;
                })}
            </Select>
        )
    }
}

DropDown.propTypes = {
    placeholder: PropTypes.string,
    isDisabled: PropTypes.bool,
    multiSelect: PropTypes.bool,
    options: PropTypes.array
};

DropDown.defaultProps = {
    placeholder: '',
    isDisabled: false,
    multiSelect: false,
    options: []
};

export default DropDown;