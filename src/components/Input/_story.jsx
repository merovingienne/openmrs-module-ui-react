import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, text, number} from '@storybook/addon-knobs/react';
import Input from './index.jsx';

function validate(input) {
    return input.length > 5;
}

storiesOf('Input', module)
    .add('Default', () => (
        <Input isValid={validate} disabled={boolean('isDisabled', false)} placeholder={text('placeholder', 'Input...')}
               defaultValue={text('default value', 'value')} width={number('width', 150)}
               height={number('height', 15)}/>
    ));
