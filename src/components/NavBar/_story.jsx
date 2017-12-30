import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import NavBar from './index.js';


const _onRightIconClick = ()=>{
    alert("Right icon clicked.");
};


storiesOf('NavBar', module)
    .add('Default', () => (
        <NavBar
            hasMenuIcon={boolean('Show Menu Icon', true)}
            onRightIconClick={_onRightIconClick}
        />
    ));
