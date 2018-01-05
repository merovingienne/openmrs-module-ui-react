import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean, array} from '@storybook/addon-knobs/react'
import DropDown from './index.jsx';

function submitOption(value) {
    alert(value)
}

function getOptions() {
    return ["First", "Second", "Third"]
}

storiesOf('DropDown', module)
    .add('simple', () => (
        <DropDown placeholder={text("value placeholder", "Dropdown")} onChange={submitOption} options={array('options', getOptions())}/>
    ))
    .add('disabled', () => (
        <DropDown placeholder={text("value placeholder", "Dropdown")} onChange={submitOption} isDisabled={boolean('disabled', true)} options={array('options', getOptions())}/>
    ))
    .add('multi-select', () => (
        <DropDown placeholder={text("value placeholder", "Dropdown")} onChange={submitOption} options={array('options', getOptions())} multiSelect={boolean('multi-select', true)}/>
    ));
