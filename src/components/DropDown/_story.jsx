import React from 'react';
import {storiesOf} from '@storybook/react';
import DropDown from './index.jsx';
import {boolean, text, number} from '@storybook/addon-knobs/react';

let options = [{text: "one", value: 1}, {text: "two", value: 2}, {text: "three", value: 3},
    {text: "four", value: 4}, {text: "five", value: 5}, {text: "six", value: 6}, {text: "seven", value: 7},
    {text: "eight", value: 8}, {text: "nine", value: 9}, {text: "ten", value: 10},];

storiesOf('DropDown', module)
    .add('default', () => (
        <DropDown
            size={number('size', 7)}
            width={text('width', '130px')}
            value={{value: "init", text: "Drop down"}}
            isDisabled={boolean('is disabled', false)}
            options={options}
            onChangeCallback={(x) => alert("you chose: " + x)}/>
    ));