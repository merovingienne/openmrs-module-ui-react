import { configure, addDecorator  } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import {muiTheme} from 'storybook-addon-material-ui';

// global knobs decorator
addDecorator(withKnobs);

// theme provider for Material UI
addDecorator(muiTheme());


const req = require.context("../src/components", true, /_story\.jsx$/);

function loadStories(){
    req.keys().forEach(req);
}

configure(loadStories, module);
