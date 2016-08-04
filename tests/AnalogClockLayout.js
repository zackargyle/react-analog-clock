import { assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import AnalogClockLayout from '../src/AnalogClockLayout';
import Styles from '../src/styles';
import { cssTransform } from '../src/util';
import { dark as theme } from '../src/themes';

const width = 200;
const styles = cssTransform(Styles, { width, theme });
const props = {
    seconds: 20, minutes: 20, hour: 6,
    styles,
};

describe('AnalogClockLayout', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AnalogClockLayout {...props} />);
    });

    it('should have 60 rotated notches', () => {
        const expected = 60;
        const numNotches = wrapper.find('span').length;
        assert.strictEqual(numNotches, expected);
    });

    it('should calculate seconds hand rotation', () => {
        const expected = `translateX(-50%) translateY(-100%) rotate(${props.seconds * 6 + 1}deg)`;
        const { transform } = wrapper.find('[data-testid="seconds"]').prop('style');
        assert.strictEqual(transform, expected);
    });

    it('should calculate minutes hand rotation', () => {
        const expected = `translateX(-50%) translateY(-100%) rotate(${props.minutes * 6 + 1}deg)`;
        const { transform } = wrapper.find('[data-testid="minutes"]').prop('style');
        assert.strictEqual(transform, expected);
    });

    it('should calculate hour hand rotation', () => {
        const expected = `translateX(-50%) translateY(-100%) rotate(${props.hour * 30 + 1.5}deg)`;
        const { transform } = wrapper.find('[data-testid="hour"]').prop('style');
        assert.strictEqual(transform, expected);
    });

});
