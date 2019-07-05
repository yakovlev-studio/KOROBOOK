import { Dimensions } from 'react-native'; 

export const { width: viewportWidth } = Dimensions.get('window')
export const { height: viewportHeight } = Dimensions.get('window')

export const calculatePercentOfTotal = (percent, total) => Math.round((percent * total) / 100);

export const calculatePercentagesBetweenTwoNumbers = (dividend, divider) => Math.round((dividend / divider) * 100)