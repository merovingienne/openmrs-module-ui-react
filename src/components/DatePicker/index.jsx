import React, { Component } from 'react';
import moment from 'moment';
import InfiniteCalendar, {
    Calendar,
    withRange,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import {EVENT_TYPE} from "react-infinite-calendar/es/Calendar/withRange";
import Timekeeper from "react-timekeeper";
import PropTypes from 'prop-types';

const CalendarWithRange = withRange(Calendar);

const theme = {
        accentColor: '#009384',
        floatingNav: {
            background: '#5B57A6',
            chevron: '#FFF',
            color: '#FFF',
        },
        headerColor: '#5B57A6',
        selectionColor: '#009384',
        textColor: {
            active: '#FFF',
            default: '#231F20',
        },
        todayColor: '#EEA616',
        weekdayColor: '#5B57A6',
};
const timePickerTheme = {
        // main container
        TIMEPICKER_BACKGROUND: '#F2F2F2',
        FONT_FAMILY: '"Roboto", sans-serif',
        DONE_BUTTON_COLOR: '#686868',
        DONE_BUTTON_BORDER_COLOR: '#CCC',

        // time
        TIME_BACKGROUND: '#5B57A6',
        TIME_DEFAULT_COLOR: '#CCC',
        TIME_SELECTED_COLOR: 'white',

        // time dropdown
        DROPDOWN_BORDER: '#f4f4f4',
        DROPDOWN_COLOR: '#8c8c8c',
        DROPDOWN_SELECTED_COLOR: '#5B57A6',

        // clock wrapper
        CLOCK_WRAPPER_BACKGROUND: '#f4f4f4',
        CLOCK_WRAPPER_MERIDIEM_BACKGROUND: '#8c8c8c',
        CLOCK_WRAPPER_MERIDIEM_COLOR: 'white',
        CLOCK_WRAPPER_MERIDIEM_COLOR_SELECTED: '#009384',

        // clock
        CLOCK_BACKGROUND: '#FFF',
        CLOCK_NUMBER_COLOR: '#BBB',
        CLOCK_HAND_ARM: '#009384',
        CLOCK_HAND_CIRCLE_BACKGROUND: '#009384',
        CLOCK_HAND_INTERMEDIATE_CIRCLE_BACKGROUND: '#fff'
};
const calendarDisplayOptions = {showMonthsForYears: false};

/**
 * DatePicker
 * state variables:
 *  selected: A moment object, or in the case of a ranged DatePicker, an array of two moment objects
 *  isTimeVisible: A boolean that states whether the time picker is currently visible.
 * props:
 *  isRanged: Boolean--Whether the DatePicker is ranged.
 *  width: Number--The width of the DatePicker element.
 *  hasTime: Boolean--Whether to enable the selection of time.
 *  disabledDates: An array of Dates to disable.
 *
 *  Callback:
 *  _onSelect(moment): A callback called when both the date (and time) have been selected by user. that's first argument is a moment object, or in the case of a ranged DatePicker, an array of two moment objects.
 */
class DatePicker extends Component {
    constructor() {
        super();
        this.state = {
            isTimeVisible: false,
            selected: moment()
        };
        this.timePicked = null;
        this.rangedTimeCurrentlyBeingSelected = 0;

        //Bind functions
        this.onDateSelectedSimple = this.onDateSelectedSimple.bind(this);
        this.onDateSelectedRanged = this.onDateSelectedRanged.bind(this);
        this.onTimeSelectedSimple = this.onTimeSelectedSimple.bind(this);
        this.onTimeSelectedRanged = this.onTimeSelectedRanged.bind(this);
    }

    render(){
        return this.renderCalendar(this.props.isRanged);
    }

    onDateSelectedSimple(date) {
        if(this.props.hasTime) {
            if(this.state.selected !== null) {
                this.setState({
                    isTimeVisible: true,
                    selected: moment(moment(date).format("MM/DD/YYYY") + " " + this.state.selected.format("hh:mm a"))
                });
            } else {
                this.setState({
                    isTimeVisible: true,
                    selected: moment(date)
                })
            }
        } else {
            this.props._onSelect(moment(date));
            this.setState({selected: moment(date)});
        }
    }
    onDateSelectedRanged(date) {
        if(this.props.hasTime) {
            if(date.eventType === EVENT_TYPE.START) {
                this.rangedTimeCurrentlyBeingSelected = 0;
                if(Array.isArray(this.state.selected)) {
                    this.setState({
                        isTimeVisible: true,
                        selected: [
                            moment(moment(date.start).format("MM/DD/YYYY") + " " + this.state.selected[0].format("hh:mm a")),
                            moment()
                        ]
                    });
                } else {
                    this.setState({
                        isTimeVisible:true,
                        selected: [
                            moment(date.start),
                            moment().startOf("day")
                        ]
                    });
                }
            } else if(date.eventType === EVENT_TYPE.END) {
                this.rangedTimeCurrentlyBeingSelected = 1;
                this.setState({
                    isTimeVisible: true,
                    selected: [this.state.selected[0], moment(moment(date.end).format("MM/DD/YYYY") + " " + this.state.selected[1].format("hh:mm a"))]
                });
            }
        } else {
            //Not a range that needs a time dialog.
            if(date.eventType === EVENT_TYPE.END) {
                this.props._onSelect([moment(date.start), moment(date.end)])
            }
        }
    }
    onTimeSelectedSimple() {
        const combinedMoment = moment(this.state.selected.format("MM/DD/YYYY") + " " + this.timePicked);
        this.props._onSelect(combinedMoment);
        this.setState({isTimeVisible: false, selected: combinedMoment});
    }
    onTimeSelectedRanged() {
        if(this.rangedTimeCurrentlyBeingSelected === 0) {
            const combinedMoment = [moment(this.state.selected[0].format("MM/DD/YYYY") + " " + this.timePicked), this.state.selected[1]];
            this.setState({isTimeVisible: false, selected: combinedMoment});
        } else {
            const combinedMoment = [this.state.selected[0], moment(this.state.selected[1].format("MM/DD/YYYY") + " " + this.timePicked)];
            this.setState({isTimeVisible: false, selected: combinedMoment});
            this.props._onSelect(combinedMoment);
        }
    }

    renderCalendar(isRanged) {
        if(isRanged) {
            return (
                <div style={{position: "relative", width: this.props.width}}>
                    <InfiniteCalendar
                        Component={CalendarWithRange}
                        disabledDates={this.props.disabledDates}
                        onSelect={this.onDateSelectedRanged}
                        selected={{
                            start: this.state.selected[0] ? this.state.selected[0].toDate() : moment().toDate(),
                            end: this.state.selected[1] ? this.state.selected[1].toDate() : moment().toDate()
                        }}
                        locale={{
                            headerFormat: 'MMM Do',
                        }}
                        theme={theme}
                        displayOptions={calendarDisplayOptions}
                        width={this.props.width}
                        height={this.props.width / 3 * 2}
                        minDate={new Date(1900, 1, 1)}
                        min={new Date(1900, 1, 1)}
                    />
                    {this.renderTimePicker(true)}
                </div>
            );
        } else {
            return(
                <div style={{position:"relative", width:this.props.width}}>
                    <InfiniteCalendar
                        disabledDates={this.props.disabledDates}
                        onSelect={this.onDateSelectedSimple}
                        theme={theme}
                        width={this.props.width}
                        height={this.props.width/3*2}
                        displayOptions={calendarDisplayOptions}
                        minDate={new Date(1900, 1, 1)}
                        min={new Date(1900, 1, 1)}
                    />
                    {this.renderTimePicker(false)}
                </div>
            );
        }
    }
    renderTimePicker(isRanged) {
        if(isRanged) {
            return(
                this.state.isTimeVisible
                    ? <div style={{position:"absolute", top:"25px", width:"100%", textAlign:"center", zIndex:3}}>
                        <Timekeeper
                            time={this.state.selected[this.rangedTimeCurrentlyBeingSelected].format("hh:mm a")}
                            onChange={(time)=> {
                                this.timePicked = time.formatted;
                            }}
                            onDoneClick={this.onTimeSelectedRanged}
                            config={timePickerTheme}
                        />
                    </div>
                    : null
            );
        } else {
            return (
                this.state.isTimeVisible
                    ? <div style={{position: "absolute", top: "25px", width: "100%", textAlign: "center", zIndex: 3}}>
                        <Timekeeper
                            time={this.state.selected.format("hh:mm a")}
                            onChange={(time) => {
                                this.timePicked = time.formatted;
                            }}
                            onDoneClick={this.onTimeSelectedSimple}
                            config={timePickerTheme}
                        />
                    </div>
                    : null
            );
        }
    }
}

DatePicker.defaultProps = {
    width: 400,
    isRanged: false,
    hasTime: false,
    disabledDates: []
};
DatePicker.propTypes = {
    width: PropTypes.number,
    isRanged: PropTypes.bool,
    hasTime: PropTypes.bool,
    disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date))
};

export default DatePicker;