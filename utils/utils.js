import { Dimensions } from "react-native";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");

export const wp = percentage => Math.round((percentage * viewportWidth) / 100);
export const hp = percentage => Math.round((percentage * viewportHeight) / 100);
export const calculatePercentOfTotal = (percent, total) => Math.round((percent * total) / 100);
