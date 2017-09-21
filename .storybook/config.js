import { configure  } from '@storybook/react';

const req = require.context("../src/components", true, /_story\.jsx$/);

function loadStories(){
  req.keys().forEach(req);
}

configure(loadStories, module);
