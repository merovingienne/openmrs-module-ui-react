import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, object} from '@storybook/addon-knobs/react';
import DatePicker from './index.jsx';
import moment from "moment";

function submitDate(moment) {
    alert(moment)
}

function submitRange(moments) {
    alert(moments) // array of one or two moments
}

storiesOf('Date Picker', module)
    .add('default', () => (
        <DatePicker onSelect={submitDate}/>
    ))
    .add('ranged', () => (
        <DatePicker ranged={boolean('uses date range', true)} onSelect={submitRange}/>
    ))
    .add('time', () => (
        <DatePicker withTime={boolean('uses time picker', true)} onSelect={submitDate}/>
    ))
    .add('ranged time', () => (
        <DatePicker ranged={boolean('uses date range', true)} withTime={boolean('uses time picker', true)}
                    onSelect={submitRange}/>
    ))
    .add('default with blocked dates', () => (
        <DatePicker onSelect={submitDate} blockFrom={object('moment for first blocked date', moment("2018-01-01"))}
                    blockTo={object('moment for last blocked date', moment("2018-01-10"))}/>
    ))
    .add('default with default date', () => (
        <DatePicker onSelect={submitDate} defaultDate={object('moment for default date', moment("2018-01-06"))}/>
    ));
