import React, {Component} from 'react';
import RangeCalendar from "rc-calendar/lib/RangeCalendar";
import Calendar from "rc-calendar/lib/Calendar";
import TimePicker from 'rc-time-picker';
import PropTypes from 'prop-types';

import "rc-calendar/dist/rc-calendar.css"
import "rc-time-picker/assets/index.css"
import './datepicker.css'


class DatePicker extends Component {

    shouldBlockDate(date) {
        if (this.props.blockFrom === undefined || this.props.blockTo === undefined || date === undefined) return false;

        return date.isBetween(this.props.blockFrom, this.props.blockTo, 'days', '[]')
    };

    render() {
        if (this.props.ranged && this.props.withTime) {
            return <RangeCalendar
                defaultValue={this.props.defaultDate}
                disabledDate={(date) => this.shouldBlockDate(date)}
                onChange={this.props.onSelect}
                timePicker={<TimePicker/>}
            />;
        } else if (this.props.ranged) {
            return <RangeCalendar
                defaultValue={this.props.defaultDate}
                disabledDate={(date) => this.shouldBlockDate(date)}
                onChange={this.props.onSelect}
            />;
        } else if (this.props.withTime) {
            return <Calendar
                defaultValue={this.props.defaultDate}
                disabledDate={(date) => this.shouldBlockDate(date)}
                onChange={this.props.onSelect}
                timePicker={<TimePicker/>}
            />;
        } else {
            return <Calendar
                defaultValue={this.props.defaultDate}
                disabledDate={(date) => this.shouldBlockDate(date)}
                onChange={this.props.onSelect}
            />;
        }

    }
}

DatePicker.propTypes = {
    blockFrom: PropTypes.object,
    blockTo: PropTypes.object,
    ranged: PropTypes.bool,
    withTime: PropTypes.bool
};

DatePicker.defaultProps = {
    blockFrom: undefined,
    blockTo: undefined,
    ranged: false,
    withTime: false
};

export default DatePicker;