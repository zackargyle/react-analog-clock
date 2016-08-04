const AnalogBase = {
    background: s => s.theme.background,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '100%',
    border: s => `${s.width / 20}px solid ${s.theme.border}`,
    height: s => s.width,
    position: 'relative',
    width: s => s.width,
};

const AnalogCenter = {
    background: s => s.theme.center,
    borderRadius: '100%',
    height: '12px',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: '12px',
};

const AnalogHand = {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transformOrigin: '50% 100%',
};

const AnalogSecondHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.seconds,
    height: s => Math.floor(s.width * 0.425),
    width: 3,
});

const AnalogMinuteHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.minutes,
    height: s => Math.floor(s.width * 0.35),
    width: 6,
});

const AnalogHourHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.hour,
    height: s => Math.floor(s.width * 0.2),
    width: 8,
});

const AnalogSmallTick = {
    background: s => s.theme.tick,
    height: 6,
    left: '50%',
    position: 'absolute',
    top: 6,
    transformOrigin: s => `0 ${Math.ceil(s.width / 2)}px`,
    width: 2,
};

const AnalogLargeTick = {
    background: s => s.theme.tick,
    height: 10,
    left: s => Math.ceil(s.width / 2) + 2,
    position: 'absolute',
    top: 10,
    transformOrigin: s => `0 ${Math.ceil(s.width / 2)}px`,
    width: 4,
};

export default {
    base: AnalogBase,
    center: AnalogCenter,
    second: AnalogSecondHand,
    minute: AnalogMinuteHand,
    hour: AnalogHourHand,
    smallTick: AnalogSmallTick,
    largeTick: AnalogLargeTick,
};
