import React from 'react';
import {storiesOf} from '@storybook/react';
import DropDown from './index.jsx';
import {boolean} from '@storybook/addon-knobs/react';


storiesOf('DropDown', module)
    .add('default', () => (
        <DropDown text="Drop down"
                  isDisabled={boolean('is disabled', false)}
                  options={["one", "two", "3", "four"]}/>
    ));