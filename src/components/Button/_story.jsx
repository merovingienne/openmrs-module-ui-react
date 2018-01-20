import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, text} from '@storybook/addon-knobs/react';
import Button from './index.jsx'

function click() {
    alert("Click")
}

storiesOf('Button', module)
    .add('default', () => (
        <Button
            isFlat={boolean('is flat', false)}
            isDisabled={boolean('is disabled', false)}
            onClick={click}>{text('button text', 'Button')}</Button>
    ))
    .add('cancel', () => (
        <Button
            type="cancel"
            isFlat={boolean('is flat', false)}
            isDisabled={boolean('is disabled', false)}
            onClick={click}>{text('button text', 'Button')}</Button>
    ));

