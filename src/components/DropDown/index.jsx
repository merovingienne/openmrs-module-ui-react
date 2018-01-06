import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './dropdown.css'

class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
        };

        this._onChange = this._onChange.bind(this);
        this._onClick = this._onClick.bind(this);
    }

    render() {
        let options = Array.from(this.props.options);
        if (this.props.value)
            options.unshift(this.props.value);

        options = options.map(function (option) {
            let value, text;
            if (typeof option !== 'object') {
                value = option;
                text = option;
            } else {
                value = option.value;
                text = option.text;
            }
            return <option key={value} value={value}>{text}</option>
        });

        return <select disabled={this.props.isDisabled} className="select-style" value={this.state.value}
                       onClick={this._onClick} onMouseDown={this._onMouseDown}
                       onChange={this._onChange} onBlur={this._onBlur}
                       style={{width: this.props.width}} size="1" id="select">{options}</select>
    }

    _onChange(event) {
        this.setState({value: event.target.value});
        this.props.onChangeCallback(event.target.value);
    }

    _onBlur(e) {
        let el = e.currentTarget;
        if (el.hasAttribute('size') && el.getAttribute('size') !== '1')
            el.setAttribute('size', '1');
    }

    _onMouseDown(e) {
        let el = e.currentTarget;

        if (el.hasAttribute('size') && el.getAttribute('size') === '1') {
            e.preventDefault();
        }
    }

    _onClick(e) {
        let el = e.currentTarget;

        if (el.getAttribute('size') === '1') {
            let length = this.props.options.length;
            if (this.props.value)
                length += 1;
            let size = (this.props.size > length) ? length : this.props.size;

            el.setAttribute('size', size.toString());
            el.focus();
        } else {
            el.setAttribute('size', '1');
            el.blur();
        }
    }
}

DropDown.propTypes = {
    size: PropTypes.number,
    width: PropTypes.string,
    value: PropTypes.object,
    isDisabled: PropTypes.bool,
    options: PropTypes.array,
    onChangeCallback: PropTypes.func,
};
DropDown.defaultProps = {
    size: 10,
    width: "120px",
    value: {},
    isDisabled: false,
    options: [""],
};

export default DropDown;