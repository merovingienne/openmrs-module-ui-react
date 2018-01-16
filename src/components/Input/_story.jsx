import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, text, number} from '@storybook/addon-knobs/react';
import Input from './index.jsx';

storiesOf('Input', module)
    .add('5 chars', () => (
        <Input
            isDisabled={boolean("is disabled", false)}
            defaultValue={text('default value',"12345")}
            placeholder={text("placeholder", "type in 5 chars")}
            width={number("width")}
            height={number("height")}
            validator={(val) => val.toString().length === 5}/>
    ));