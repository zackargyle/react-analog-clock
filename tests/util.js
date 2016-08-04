import { assert } from 'chai';
import { spy } from 'sinon';

import { cssTransform, updateTime } from '../src/util';

describe('util', () => {

    describe('cssTransform', () => {
        const props = { test: 'test' };
        const CSS = {
            base: {
                background: p => p.test,
            },
        };

        it('should not mutate the original styles object', () => {
            const result = cssTransform(CSS, props);
            assert.notStrictEqual(result, CSS);
        });

        it('should call css functions with props', () => {
            const backgroundFn = spy(CSS.base, 'background');
            cssTransform(CSS, props);
            assert.strictEqual(backgroundFn.called, true);
            backgroundFn.restore();
        });

        it('should interpolate values', () => {
            const result = cssTransform(CSS, props);
            assert.strictEqual(result.base.background, props.test);
        });

    });

    describe('updateTime', () => {
        const time = {
            seconds: 0,
            minutes: 0,
            hour: 0,
        };

        it('should not mutate the original object', () => {
            const input = Object.assign({}, time);
            const result = updateTime(time);
            assert.notStrictEqual(result, input);
        });

        it('should update seconds', () => {
            const input = Object.assign({}, time);
            const result = updateTime(time);
            assert.strictEqual(result.seconds, input.seconds + 1);
        });

        it('should roll over seconds', () => {
            const input = Object.assign({}, time, { seconds: 59 });
            const result = updateTime(input);
            assert.strictEqual(result.seconds, 0);
        });

        it('should update minutes', () => {
            const input = Object.assign({}, time, { seconds: 59 });
            const result = updateTime(input);
            assert.strictEqual(result.minutes, input.minutes + 1);
        });

        it('should roll over minutes', () => {
            const input = Object.assign({}, time, { seconds: 59, minutes: 59 });
            const result = updateTime(input);
            assert.strictEqual(result.minutes, 0);
        });

        it('should update hour', () => {
            const input = Object.assign({}, time, { seconds: 59, minutes: 59 });
            const result = updateTime(input);
            assert.strictEqual(result.hour, input.hour + 1);
        });

        it('should roll over hour', () => {
            const input = Object.assign({}, time, { seconds: 59, minutes: 59, hour: 11 });
            const result = updateTime(input);
            assert.strictEqual(result.hour, 0);
        });

    });

});
