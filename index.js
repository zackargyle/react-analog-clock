import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock, { Themes } from '../src/index';

const WIDTH = 200;
const GMTOFFSET= "-5.5";

const Component = (
    <div>
        <span><AnalogClock width={WIDTH} theme={Themes.light} /></span>
        <span><AnalogClock width={WIDTH} theme={Themes.dark} /></span>
        <span><AnalogClock width={WIDTH} theme={Themes.aqua} /></span>
        <span><AnalogClock width={WIDTH} theme={Themes.lime} /></span>
        <span><AnalogClock width={WIDTH} theme={Themes.sherbert} /></span>
        <span><AnalogClock width={WIDTH} theme={Themes.navy} /></span>

        <h2>With GMT Offset -5.5:</h2>
        <span><AnalogClock width={WIDTH} theme={Themes.light} gmtOffset={GMTOFFSET} /></span>
    </div>
);

ReactDOM.render(Component, document.getElementById('app'));
