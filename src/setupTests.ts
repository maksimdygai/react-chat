import '@testing-library/jest-dom/extend-expect';
import {configure, mount, render, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';

configure({adapter: new Adapter()});

// Define globals to cut down on imports in test files
global.React = React;
// @ts-ignore
global.render = render;
// @ts-ignore
global.mount = mount;
