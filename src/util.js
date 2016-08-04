export function cssTransform(styles, props) {
    return Object.keys(styles).reduce((newStyles, rootKey) => {
        const style = styles[rootKey];
        newStyles[rootKey] = Object.keys(style).reduce((newStyle, key) => {
            if (typeof style[key] === 'function') {
                newStyle[key] = style[key](props);
            } else {
                newStyle[key] = style[key];
            }
            return newStyle;
        }, {});
        return newStyles;
    }, {});
}

export function updateTime({ seconds, minutes, hour }) {
    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes === 60) {
        minutes = 0;
        hour += 1;
    }
    if (hour === 12) {
        hour = 0;
    }
    return { seconds, minutes, hour };
}
