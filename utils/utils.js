
export const compose = (f, g) => (...args) => f(g(...args))

export const convertPercentToDecimal = (percent) =>  parseFloat(percent) / 100.0;

export const calculatePercentOfTotal = (percent, total) => Math.round((percent * total) / 100);
