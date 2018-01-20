import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs/react';
import Button from './index.jsx';

function click() {
    alert("Click!")
}

storiesOf('Button', module)
    .add('default', () => (
        <Button onClick={click} isActive={boolean('is active', true)} isFlat={boolean('is flat', false)}>{text('button text', 'Button')}</Button>
    ))
    .add('submit', () => (
        <Button onClick={click} type="submit" isActive={boolean('is active', true)} isFlat={boolean('is flat', false)}>{text('button text', 'Button')}</Button>
    ))
    .add('cancel', () => (
        <Button onClick={click} type="cancel" isActive={boolean('is active', true)} isFlat={boolean('is flat', false)}>{text('button text', 'Button')}</Button>
    ));
