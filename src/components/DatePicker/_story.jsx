import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DatePicker from './index.jsx';

storiesOf('Date Picker', module)
    .add('with text', () => (
        <DatePicker />
    ));
