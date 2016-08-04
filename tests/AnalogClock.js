import { assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import AnalogClock from '../src/AnalogClock';
import AnalogClockLayout from '../src/AnalogClockLayout';
import { dark, light } from '../src/themes';

describe('AnalogClock', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AnalogClock />);
    });

    it('should have prop defaults', () => {
        const { theme, width } = wrapper.instance().props;
        assert.strictEqual(theme, dark);
        assert.strictEqual(width, 400);
    });

    it('should cache calculated styles', () => {
        const styles = wrapper.instance().styles;
        wrapper.update();
        assert.strictEqual(wrapper.instance().styles, styles);
    });

    it('should updated cached styles when new props received', () => {
        const styles = wrapper.instance().styles;
        wrapper.setProps({ theme: light });
        assert.notStrictEqual(wrapper.instance().styles, styles);
    });

    it('should start the interval on mount', () => {
        assert.isUndefined(wrapper.instance().interval);
        wrapper.instance().componentDidMount();
        assert.isDefined(wrapper.instance().interval);
    });

    it('should clear the interval on unmount', () => {
        wrapper.instance().componentDidMount();
        assert.isDefined(wrapper.instance().interval);
        wrapper.instance().componentWillUnmount();
        assert.isNull(wrapper.instance().interval[0]);
    });

    it('should pass state to the layout component', () => {
        const styles = wrapper.instance().styles;
        const layout = wrapper.find(AnalogClockLayout);
        assert.isDefined(layout.prop('seconds'));
        assert.isDefined(layout.prop('minutes'));
        assert.isDefined(layout.prop('hour'));
        assert.strictEqual(layout.prop('styles'), styles);
    });

});
