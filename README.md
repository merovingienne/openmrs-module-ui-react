# React UI Library - OpenMRS

This is a React component library to be used when developing OpenMRS modules.


# Development Setup

[Node.js](https://nodejs.org/en/) is required for development.

Simply clone the repository and run the following commands at the project root.

```
git clone https://github.com/merovingienne/openmrs-module-ui-react.git
cd openmrs-module-ui-react
npm install
```

[React Storybook](https://storybook.js.org/) is used for rapid UI testing during development. You can get started with the command `npm run storybook`. Navigate to `http://localhost:9001`.


# Development Guide

When adding a new component,
1. In `src/components`, create new folder with the component name.
2. Create `index.jsx` file with component source, and add `_story.jsx` to view stories through Storybook.
3. Add component to `src/index.js`.


### Naming conventions

* Component names should follow `UpperCamelCase` format.
* Event handlers within each component should follow `_onEvent` format.
* Prop name formats
  * All prop names - `lowerCamelCase`.
  * Boolean - `isFlagTrue`.
    * eg: `isEnabled`
  * Inclusion - `hasElement`.
    * eg: `hasLeftIcon`

### General Guidelines

* Fork the project, and create new branch from `develop` as per OpenMRS pull request tips. **Make all pull requests against the develop branch**. We use the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
* Generalize components as much as possible and allow changing behaviour via props.
  * eg: `DatePicker`, `RangedDatePicker`, `DatePickerWithTime` could all be a single component displaying different behaviours with props `isRanged`, `hasTime`.
* Add default props and mention prop types. See [here](https://reactjs.org/docs/typechecking-with-proptypes.html) for more info.
* Try to reduce dependencies on external libraries and create components from scratch where possible. But do not reinvent the wheel if a good substitute can be found elsewhere.
* Code quality checks with [SonarLint](https://www.sonarlint.org/) are encouraged.
* Follow [OpenMRS pull request tips](https://wiki.openmrs.org/display/docs/Pull+Request+Tips).

# License
The source code is distributed under the terms of [Mozilla Public License, v. 2.0](http://mozilla.org/MPL/2.0).