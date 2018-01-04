import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs/react';
import DatePicker from './index.jsx';
import moment from "moment";

const _onSelect = (moment) => {
    if(moment[0] !== undefined) {
        //Is ranged
        console.log("Moment from: "+moment[0].toISOString(true) + "Moment to: "+moment[1].toISOString(true));
    } else {
        //Is not ranged
        console.log("Moment: "+moment.toISOString(true));
    }

};

storiesOf('Date Picker', module)
    .add('DatePicker', () => (
        <DatePicker
            isRanged={boolean("isRanged", false)}
            hasTime={boolean("hasTime", false)}
            width={number("width", 400)}
            _onSelect={_onSelect} />
    ))
    .add('DatePicker with disabled dates', () => (
        <DatePicker
            isRanged={boolean("isRanged", false)}
            hasTime={boolean("hasTime", false)}
            width={number("width", 400)}
            _onSelect={_onSelect}
            disabledDates={[moment().toDate(), moment().endOf("month").toDate(), moment("Feb 02, 2018").toDate(), moment().startOf("month").toDate()]} />
    ));